import React, { useRef, useState, useEffect } from "react";
import { FaPlay, FaPlus, FaThumbsUp, FaAngleDown } from "react-icons/fa";
import styles from "./MovieCard.module.css";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const MovieCard = ({ movie }) => {
  const [trailerKey, setTrailerKey] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const timerRef = useRef(null);
  const hoverRef = useRef(false);

  const mediaType =
    movie.media_type || (movie.first_air_date || movie.name ? "tv" : "movie");

  const movieTitle = movie.title || movie.name;

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const getTrailer = async (type, id) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${TMDB_API_KEY}`,
      );

      if (!response.ok) return null;

      const data = await response.json();
      const videos = data.results || [];

      const trailer =
        videos.find(
          (v) => v.site === "YouTube" && v.type === "Trailer" && v.official,
        ) ||
        videos.find((v) => v.site === "YouTube" && v.type === "Trailer") ||
        videos.find((v) => v.site === "YouTube" && v.type === "Teaser");

      return trailer?.key || null;
    } catch (error) {
      console.error("Trailer error:", error);
      return null;
    }
  };

  const handleMouseEnter = async () => {
    hoverRef.current = true;
    setIsHovered(true);

    clearTimeout(timerRef.current);
    setTrailerKey(null);

    if (!TMDB_API_KEY || !movie.id) return;

    let key = await getTrailer(mediaType, movie.id);

    if (!hoverRef.current) return;

    if (!key) {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/${mediaType}/${movie.id}/recommendations?api_key=${TMDB_API_KEY}`,
        );

        if (response.ok) {
          const data = await response.json();

          for (const similar of (data.results || []).slice(0, 5)) {
            if (!hoverRef.current) return;

            key = await getTrailer(mediaType, similar.id);

            if (key) break;
          }
        }
      } catch (error) {
        console.error("Similar movie error:", error);
      }
    }

    if (hoverRef.current && key) {
      setTrailerKey(key);
    }
  };

  const handleMouseLeave = () => {
    hoverRef.current = false;
    setIsHovered(false);

    clearTimeout(timerRef.current);
    setTrailerKey(null);
  };
  return (
    <div
      className={styles.movieCardWrapper}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.movieCard}>
        <img
          src={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${movie.poster_path}`
              : "/placeholder.jpg"
          }
          alt={movieTitle}
          className={styles.cardImage}
        />

        {isHovered && trailerKey && (
          <div className={styles.trailerContainer}>
            <iframe
              key={trailerKey}
              className={styles.trailerVideo}
              src={`https://www.youtube-nocookie.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&rel=0&playsinline=1`}
              title={`${movieTitle} trailer`}
              loading="eager"
              allow="autoplay; encrypted-media; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        )}

        <div className={styles.cardHoverInfo}>
          <div className={styles.iconButtonsRow}>
            <div className={styles.leftIcons}>
              <button
                className={`${styles.iconBtn} ${styles.playBtn}`}
                aria-label={`Play ${movieTitle}`}
              >
                <FaPlay />
              </button>

              <button className={styles.iconBtn} aria-label="Add to my list">
                <FaPlus />
              </button>

              <button className={styles.iconBtn} aria-label="Like">
                <FaThumbsUp />
              </button>
            </div>

            <button
              className={`${styles.iconBtn} ${styles.moreBtn}`}
              aria-label="More information"
            >
              <FaAngleDown />
            </button>
          </div>

          <h3 className={styles.movieTitle}>{movieTitle}</h3>

          <div className={styles.metaInfoRow}>
            <span className={styles.matureRating}>
              {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
            </span>

            <span className={styles.categoryType}>
              {mediaType === "tv" ? "TV Show" : "Movie"}
            </span>

            <span className={styles.qualityBadge}>HD</span>
          </div>

          {movie.overview && (
            <p className={styles.overview}>{movie.overview}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
