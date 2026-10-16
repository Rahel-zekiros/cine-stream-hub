import React, { useEffect, useState } from "react";
import { FaPlay, FaPlus, FaTimes } from "react-icons/fa";
import styles from "./Banner.module.css";
import requests from "../../api/request.js";
import axios from "axios";
import BASE_URL from "../../api/tmbd.js";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const Banner = () => {
  const [movie, setMovie] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [trailerKey, setTrailerKey] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoadingTrailer, setIsLoadingTrailer] = useState(false);
  const [trailerError, setTrailerError] = useState("");

  useEffect(() => {
    const fetchBannerMovie = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}${requests.fetchTrending}`,
        );

        const results = response.data.results || [];

        if (results.length > 0) {
          const randomMovie =
            results[Math.floor(Math.random() * results.length)];

          setMovie(randomMovie);
        }
      } catch (error) {
        console.error("Banner API Error:", error);
      }
    };

    fetchBannerMovie();
  }, []);

  // Get the correct movie type: movie or TV show.
  const getMediaType = (item) => {
    if (item.media_type === "tv" || item.media_type === "movie") {
      return item.media_type;
    }

    return item.first_air_date || item.name ? "tv" : "movie";
  };

  // Find the official trailer, or another available YouTube trailer.
  const getTrailer = async (type, id) => {
    try {
      // Reuse the TMDB API key from the existing request configuration.
      const queryString = requests.fetchTrending.split("?")[1] || "";
      const apiKey = new URLSearchParams(queryString).get("api_key");

      if (!apiKey) {
        throw new Error(
          "TMDB API key was not found in requests.fetchTrending.",
        );
      }

      const response = await axios.get(
        `${BASE_URL.replace(/\/$/, "")}/${type}/${id}/videos`,
        {
          params: { api_key: apiKey },
        },
      );

      const videos = response.data.results || [];

      const youtubeVideos = videos.filter(
        (video) =>
          video.site === "YouTube" &&
          (video.type === "Trailer" || video.type === "Teaser"),
      );

      const selected =
        youtubeVideos.find(
          (video) => video.type === "Trailer" && video.official,
        ) ||
        youtubeVideos.find((video) => video.type === "Trailer") ||
        youtubeVideos.find((video) => video.type === "Teaser");

      return selected?.key || null;
    } catch (error) {
      console.error("Trailer API Error:", error);
      return null;
    }
  };

  // Find this movie's trailer first, then try recommended movies.
  const handlePlay = async () => {
    if (!movie || isLoadingTrailer) return;

    setIsLoadingTrailer(true);
    setTrailerError("");
    setTrailerKey(null);

    const mediaType = getMediaType(movie);

    try {
      // 1. Try the banner movie itself.
      let key = await getTrailer(mediaType, movie.id);

      // 2. If no trailer exists, try recommended movies.
      if (!key) {
        const queryString = requests.fetchTrending.split("?")[1] || "";
        const apiKey = new URLSearchParams(queryString).get("api_key");

        const response = await axios.get(
          `${BASE_URL.replace(/\/$/, "")}/${mediaType}/${movie.id}/recommendations`,
          {
            params: { api_key: apiKey },
          },
        );

        const recommendations = response.data.results || [];

        for (const recommendedMovie of recommendations.slice(0, 5)) {
          key = await getTrailer(mediaType, recommendedMovie.id);

          if (key) break;
        }
      }

      if (key) {
        setTrailerKey(key);
        setIsPlaying(true);
      } else {
        setTrailerError(
          "No trailer was found for this movie or its recommendations.",
        );
      }
    } catch (error) {
      console.error("Could not load trailer:", error);
      setTrailerError("Could not load the trailer. Please try again.");
    } finally {
      setIsLoadingTrailer(false);
    }
  };

  const handleCloseTrailer = () => {
    setIsPlaying(false);
    setTrailerKey(null);
    setTrailerError("");
  };

  if (!movie) {
    return (
      <section className={styles.banner}>
        <div className={styles.loading}>Loading...</div>
      </section>
    );
  }

  const title = movie.title || movie.name || movie.original_name;
  const description = movie.overview || "";

  const shouldTruncate = description.length > 150 && !isExpanded;

  const finalDescription = shouldTruncate
    ? description.slice(0, 150) + "..."
    : description;

  return (
    <>
      {!isPlaying && (
        <section
          className={styles.banner}
          style={{
            backgroundImage: `url(${IMAGE_BASE_URL}${movie.backdrop_path})`,
          }}
        >
          <div className={styles.overlay}></div>

          <div className={styles.bannerContent}>
            <p className={styles.brand}>CINESTREAM</p>

            <h1 className={styles.title}>{title}</h1>

            <p className={styles.description}>
              {finalDescription}

              {description.length > 150 && (
                <span
                  onClick={() => setIsExpanded(!isExpanded)}
                  className={styles.moreLink}
                >
                  {isExpanded ? " Less" : " More"}
                </span>
              )}
            </p>

            <div className={styles.buttons}>
              <button
                className={styles.playButton}
                onClick={handlePlay}
                disabled={isLoadingTrailer}
              >
                <FaPlay />
                <span>{isLoadingTrailer ? "Loading..." : "Play"}</span>
              </button>

              <button className={styles.myListButton}>
                <FaPlus />
                <span>My List</span>
              </button>
            </div>

            {trailerError && (
              <p className={styles.trailerError} role="status">
                {trailerError}
              </p>
            )}
          </div>
        </section>
      )}

      {isPlaying && trailerKey && (
        <div className={styles.fullscreenTrailer}>
          <button
            className={styles.closeTrailer}
            onClick={handleCloseTrailer}
            aria-label="Close trailer"
          >
            <FaTimes />
          </button>

          <iframe
            className={styles.trailerFrame}
            src={`https://www.youtube-nocookie.com/embed/${trailerKey}?autoplay=1&rel=0`}
            title={`${title} trailer`}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        </div>
      )}
    </>
  );
};

export default Banner;
