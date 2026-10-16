import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Header/Header.jsx";
import MovieRow from "../MovieRow/MovieRow.jsx";
import MovieCard from "../MovieCard/MovieCard.jsx";
import requests from "../../api/request.js";
import styles from "./SectionTwo.module.css";
import BASE_URL from "../../api/tmbd.js";

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

  // SEARCH RESULTS & QUERY STATE
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // FETCH MOVIES
  useEffect(() => {
    const fetchMovies = async () => {
      try {
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
          axios.get(`${BASE_URL}${requests.fetchTrending}`),
          axios.get(`${BASE_URL}${requests.fetchFeatured}`),
          axios.get(`${BASE_URL}${requests.fetchTopRatedMovies}`),
          axios.get(`${BASE_URL}${requests.fetchActionMovies}`),
          axios.get(`${BASE_URL}${requests.fetchComedyMovies}`),
          axios.get(`${BASE_URL}${requests.fetchHorrorMovies}`),
          axios.get(`${BASE_URL}${requests.fetchRomanceMovies}`),
          axios.get(`${BASE_URL}${requests.fetchDocumentaries}`),
        ]);

        setMovies({
          trending: trendingResponse.data.results || [],
          featured: featuredResponse.data.results || [],
          topRated: topRatedResponse.data.results || [],
          action: actionResponse.data.results || [],
          comedy: comedyResponse.data.results || [],
          horror: horrorResponse.data.results || [],
          romance: romanceResponse.data.results || [],
          documentaries: documentariesResponse.data.results || [],
        });
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <Header 
        movies={movies} 
        setSearchResults={setSearchResults} 
        setSearchQuery={setSearchQuery} 
      />

      <section className={styles.sectionTwo}>
        
        {searchQuery.trim() !== "" ? (
          <div style={{ padding: "80px 20px 20px 20px" }}>
            <h2 style={{ color: "white", marginBottom: "20px" }}>
              Search Results for "{searchQuery}"
            </h2>
            {searchResults.length > 0 ? (
              <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
                {searchResults.map((movie) => (
                  <div key={movie.id} style={{ width: "200px" }}>
                    <MovieCard movie={movie} />
                  </div>
                ))}
              </div>
            ) : (
              <p style={{ color: "gray", fontSize: "18px" }}>
                No movies found matching your search.
              </p>
            )}
          </div>
        ) : (
          <>
            <MovieRow title="Trending" movies={movies.trending} />
            <MovieRow title="Featured Movies" movies={movies.featured} />
            <MovieRow title="Top Rated" movies={movies.topRated} />
            <MovieRow title="Action Movies" movies={movies.action} />
            <MovieRow title="Comedy Movies" movies={movies.comedy} />
            <MovieRow title="Horror Movies" movies={movies.horror} />
            <MovieRow title="Romance Movies" movies={movies.romance} />
            <MovieRow title="Documentaries" movies={movies.documentaries} />
          </>
        )}
      </section>
    </>
  );
};

export default SectionTwo;