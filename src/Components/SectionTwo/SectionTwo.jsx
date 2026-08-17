import React, { useEffect, useState } from "react";
import MovieRow from "../MovieRow/MovieRow.jsx";
import requests from "../../api/request.js";
import styles from "./SectionTwo.module.css";

const BASE_URL = "https://api.themoviedb.org/3";

const SectionTwo = () => {
  const [movies, setMovies] = useState({
    trending: [],
    netflixOriginals: [],
    topRated: [],
    action: [],
    comedy: [],
    horror: [],
    romance: [],
    documentaries: [],
  });

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        // 8 API REQUESTS

 const [trendingResponse, netflixResponse, topRatedResponse, actionResponse, comedyResponse, horrorResponse, romanceResponse, documentariesResponse,
        ] = await Promise.all([
          fetch(`${BASE_URL}${requests.fetchTrending}`),
          fetch(`${BASE_URL}${requests.fetchNetflixOriginals}`),
          fetch(`${BASE_URL}${requests.fetchTopRatedMovies}`),
          fetch(`${BASE_URL}${requests.fetchActionMovies}`),
          fetch(`${BASE_URL}${requests.fetchComedyMovies}`),
          fetch(`${BASE_URL}${requests.fetchHorrorMovies}`),
          fetch(`${BASE_URL}${requests.fetchRomanceMovies}`),
          fetch(`${BASE_URL}${requests.fetchDocumentaries}`),
        ]);

        // 8 RESPONSES

        const [
          trendingData,
          netflixData,
          topRatedData,
          actionData,
          comedyData,
          horrorData,
          romanceData,
          documentariesData,
        ] = await Promise.all([
          trendingResponse.json(),
          netflixResponse.json(),
          topRatedResponse.json(),
          actionResponse.json(),
          comedyResponse.json(),
          horrorResponse.json(),
          romanceResponse.json(),
          documentariesResponse.json(),
        ]);

        // SAVE RESPONSE DATA

        setMovies({
          trending: trendingData.results || [],
          netflixOriginals: netflixData.results || [],
          topRated: topRatedData.results || [],
          action: actionData.results || [],
          comedy: comedyData.results || [],
          horror: horrorData.results || [],
          romance: romanceData.results || [],
          documentaries: documentariesData.results || [],
        });

      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <section className={styles.sectionTwo}>

      <MovieRow title="Movie suggestions" movies={movies.trending} />

      <MovieRow title="Popular on Netflix" movies={movies.netflixOriginals}/>

      <MovieRow title="Top Rated" movies={movies.topRated}/>

      <MovieRow title="Action Movies" movies={movies.action} />

      <MovieRow title="Comedy Movies" movies={movies.comedy}/>

      <MovieRow  title="Horror Movies"  movies={movies.horror} />

      <MovieRow title="Romance Movies" movies={movies.romance} />

      <MovieRow title="Documentaries" movies={movies.documentaries} />

    </section>
  );
};

export default SectionTwo;