import React from "react";
import {FaPlay, FaPlus, FaThumbsUp, FaAngleDown,} from "react-icons/fa";
import styles from "./MovieCard.module.css";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({ movie }) => {
  return (
    <div className={styles.movieCardWrapper}>

      <div className={styles.movieCard}>

        {/* MOVIE IMAGE */}
        <img src={   movie.poster_path  ? `${IMAGE_BASE_URL}${movie.poster_path}`: "/placeholder.jpg" }
          alt={movie.title || movie.name}
          className={styles.cardImage}
        />

        {/* HOVER INFORMATION */}
        <div className={styles.cardHoverInfo}>

          {/* ICON BUTTONS */}
          <div className={styles.iconButtonsRow}>

            <div className={styles.leftIcons}>

              {/* PLAY */}
              <button
                className={`${styles.iconBtn} ${styles.playBtn}`}
              >
                <FaPlay />
              </button>

              {/* ADD */}
              <button className={styles.iconBtn}>
                <FaPlus />
              </button>

              {/* LIKE */}
              <button className={styles.iconBtn}>
                <FaThumbsUp />
              </button>

            </div>

            {/* MORE */}
            <button className={`${styles.iconBtn} ${styles.moreBtn}`} >
              <FaAngleDown />
            </button>

          </div>

          {/* MOVIE TITLE */}
          <h3 className={styles.movieTitle}>
            {movie.title || movie.name}
          </h3>

          {/* MOVIE META INFORMATION */}
          <div className={styles.metaInfoRow}>

            {/* RATING */}
            <span className={styles.matureRating}>
              {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
            </span>

            {/* TYPE */}
            <span className={styles.categoryType}>
              {movie.media_type === "tv"  ? "TV Show"  : "Movie"}
            </span>

            {/* QUALITY */}
            <span className={styles.qualityBadge}>
              HD
            </span>

          </div>

          {/* OVERVIEW */}
          {movie.overview && (
            <p className={styles.overview}>
              {movie.overview}
            </p>
          )}

        </div>

      </div>

    </div>
  );
};

export default MovieCard;