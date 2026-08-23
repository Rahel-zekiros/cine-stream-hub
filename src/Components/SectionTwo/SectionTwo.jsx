import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieRow from "../MovieRow/MovieRow.jsx";
import requests from "../../api/request.js";
import styles from "./SectionTwo.module.css";

const BASE_URL = "https://api.themoviedb.org/3";

const SectionTwo = () => {

  // MOVIES STATE
  
  const [movies, setMovies] = useState({
    trending: [],
    featured: [],
    topRated: [],
    action: [],
    comedy: [],
    horror: [],
    romance: [],
    documentaries: [],
  });


  // =========================
  // FETCH MOVIES
  // =========================
  useEffect(() => {

    const fetchMovies = async () => {

      try {
        // GET ALL API DATA
        const [
          trendingResponse,
          featuredResponse,
          topRatedResponse,
          actionResponse,
          comedyResponse,
          horrorResponse,
          romanceResponse,
          documentariesResponse,
        ] = await Promise.all([

          axios.get(
            `${BASE_URL}${requests.fetchTrending}`
          ),

          axios.get(
            `${BASE_URL}${requests.fetchFeatured}`
          ),

          axios.get(
            `${BASE_URL}${requests.fetchTopRatedMovies}`
          ),

          axios.get(
            `${BASE_URL}${requests.fetchActionMovies}`
          ),

          axios.get(
            `${BASE_URL}${requests.fetchComedyMovies}`
          ),

          axios.get(
            `${BASE_URL}${requests.fetchHorrorMovies}`
          ),

          axios.get(
            `${BASE_URL}${requests.fetchRomanceMovies}`
          ),

          axios.get(
            `${BASE_URL}${requests.fetchDocumentaries}`
          ),

        ]);


        // SAVE API DATA INTO STATE
        setMovies({

          trending:
            trendingResponse.data.results || [],

          featured:
            featuredResponse.data.results || [],

          topRated:
            topRatedResponse.data.results || [],

          action:
            actionResponse.data.results || [],

          comedy:
            comedyResponse.data.results || [],

          horror:
            horrorResponse.data.results || [],

          romance:
            romanceResponse.data.results || [],

          documentaries:
            documentariesResponse.data.results || [],

        });

      } catch (error) {

        console.error(
          "Failed to fetch movies:",
          error
        );

      }

    };


    // CALL FUNCTION
    fetchMovies();

  }, []);


  // DISPLAY MOVIE ROWS
  return (

    <section className={styles.sectionTwo}>

      <MovieRow
        title="Trending"
        movies={movies.trending}
      />

      <MovieRow
        title="Featured Movies"
        movies={movies.featured}
      />

      <MovieRow
        title="Top Rated"
        movies={movies.topRated}
      />

      <MovieRow
        title="Action Movies"
        movies={movies.action}
      />

      <MovieRow
        title="Comedy Movies"
        movies={movies.comedy}
      />

      <MovieRow
        title="Horror Movies"
        movies={movies.horror}
      />

      <MovieRow
        title="Romance Movies"
        movies={movies.romance}
      />

      <MovieRow
        title="Documentaries"
        movies={movies.documentaries}
      />

    </section>

  );
};

export default SectionTwo;




// const trending = await axios.get(trendingUrl);

// const featured = await axios.get(featuredUrl);

// const action = await axios.get(actionUrl);