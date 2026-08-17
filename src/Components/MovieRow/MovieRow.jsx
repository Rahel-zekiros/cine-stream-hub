import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import MovieCard from "../MovieCard/MovieCard";

import "swiper/css";
import "swiper/css/navigation";
import styles from "./MovieRow.module.css";

const MovieRow = ({ title, movies }) => {
  return (
    <div className={`${styles.rowWrapper} Row`}>

      {/* ROW TITLE */}
      <div className={styles.sectionHeader}>
        <h2>{title}</h2>
        <button className={styles.arrow}>→</button>
      </div>

      {/* MOVIE SWIPER CONTAINER */}
      <div className={styles.movieRowContainer}>
        <Swiper
          modules={[Navigation]}
          navigation={true}
          spaceBetween={15} 
          
           
          slidesPerView={2}
          slidesPerGroup={2}
          breakpoints={{
            480: { slidesPerView: 2, slidesPerGroup: 2 },
            768: { slidesPerView: 4, slidesPerGroup: 4 },
            1024: { slidesPerView: 6, slidesPerGroup: 6 }, 
          }}
          className={styles.movieSwiper}
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie.id} className={styles.movieSlide}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  );
};

export default MovieRow;
