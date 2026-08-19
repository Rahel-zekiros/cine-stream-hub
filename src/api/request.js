const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const requests = {
  fetchTrending:
    `/trending/all/week?api_key=${API_KEY}&language=en-US`,

  fetchFeatured:
    `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc`,

  fetchTopRatedMovies:
    `/movie/top_rated?api_key=${API_KEY}&language=en-US`,

  fetchActionMovies:
    `/discover/movie?api_key=${API_KEY}&with_genres=28&language=en-US`,

  fetchComedyMovies:
    `/discover/movie?api_key=${API_KEY}&with_genres=35&language=en-US`,

  fetchHorrorMovies:
    `/discover/movie?api_key=${API_KEY}&with_genres=27&language=en-US`,

  fetchRomanceMovies:
    `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=en-US`,

  fetchDocumentaries:
    `/discover/movie?api_key=${API_KEY}&with_genres=99&language=en-US`,
};

export default requests;