import React, { useEffect, useState } from "react";
import { FaPlay, FaPlus } from "react-icons/fa";
import styles from "./Banner.module.css";
import requests from "../../api/request.js";
import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const Banner = () => {
  const [movie, setMovie] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const fetchBannerMovie = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}${requests.fetchTrending}`
        );

        const data = response.data;

        console.log(data);

        if (data.results && data.results.length > 0) {
          const randomMovie =
            data.results[
              Math.floor(Math.random() * data.results.length)
            ];

          setMovie(randomMovie);
        }
      } catch (error) {
        console.error("Banner API Error:", error);
      }
    };

    fetchBannerMovie();
  }, []);

  if (!movie) {
    return (
      <section className={styles.banner}>
        <div className={styles.loading}>
          Loading...
        </div>
      </section>
    );
  }

  const title = movie.title || movie.name || movie.original_name;

  const description = movie.overview || "";

  const shouldTruncate =description.length > 150 && !isExpanded;

  const finalDescription = shouldTruncate? description.slice(0, 150) + "..." : description;

  return (
    <section
      className={styles.banner}
      style={{
        backgroundImage: `url(${IMAGE_BASE_URL}${movie.backdrop_path})`,
      }}
    >
      {/* DARK OVERLAY */}
      <div className={styles.overlay}></div>

      {/* BANNER CONTENT */}
      <div className={styles.bannerContent}>

        {/* ORIGINAL BRAND */}
        <p className={styles.brand}>
          CINESTREAM
        </p>

        {/* MOVIE TITLE */}
        <h1 className={styles.title}>
          {title}
        </h1>

        {/* DESCRIPTION */}
        <p className={styles.description}>
          {finalDescription}

          {description.length > 150 && (
            <span
              onClick={() =>
                setIsExpanded(!isExpanded)
              }
              className={styles.moreLink}
            >
              {isExpanded ? " Less" : " More"}
            </span>
          )}
        </p>

        {/* BUTTONS */}
        <div className={styles.buttons}>

          <button className={styles.playButton}>
            <FaPlay />
            <span>Play</span>
          </button>

          <button className={styles.myListButton}>
            <FaPlus />
            <span>My List</span>
          </button>

        </div>
      </div>
    </section>
  );
};

export default Banner;