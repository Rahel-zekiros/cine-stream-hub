import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { FiSearch, FiBell, FiUser, FiChevronDown } from "react-icons/fi";
import axios from "axios";
import BASE_URL from "../../api/tmbd.js";
import requests from "../../api/request.js";
import { useRef } from "react";
function Header({ movies, setSearchResults, setSearchQuery }) {
  const [showSearch, setShowSearch] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const notificationCount = 5;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

const searchRequestRef = useRef(0);

const handleSearchChange = async (e) => {
  const query = e.target.value.trim().toLowerCase();

  setSearchQuery(query);

  const requestId = ++searchRequestRef.current;

  if (!query) {
    if (setSearchResults) {
      setSearchResults([]);
    }
    return;
  }

  if (!movies) return;

  // Combine all movies already loaded in the app.
  const allMovies = [
    ...(movies.trending || []),
    ...(movies.featured || []),
    ...(movies.topRated || []),
    ...(movies.action || []),
    ...(movies.comedy || []),
    ...(movies.horror || []),
    ...(movies.romance || []),
    ...(movies.documentaries || []),
  ];

  // Remove duplicate movies.
  const uniqueMovies = Array.from(
    new Map(allMovies.map((movie) => [movie.id, movie])).values()
  );

  // Filter by category.
  let categoryResults = null;

  if (query.includes("trending")) {
    categoryResults = movies.trending || [];
  } else if (query.includes("top") || query.includes("rated")) {
    categoryResults = movies.topRated || [];
  } else if (query.includes("action")) {
    categoryResults = movies.action || [];
  } else if (query.includes("comedy")) {
    categoryResults = movies.comedy || [];
  } else if (query.includes("horror")) {
    categoryResults = movies.horror || [];
  } else if (query.includes("romance")) {
    categoryResults = movies.romance || [];
  } else if (
    query.includes("documentary") ||
    query.includes("documentaries")
  ) {
    categoryResults = movies.documentaries || [];
  } else if (query.includes("feature")) {
    categoryResults = movies.featured || [];
  }

  if (categoryResults !== null) {
    if (setSearchResults) {
      setSearchResults(categoryResults);
    }
    return;
  }

  // First search the movies already loaded in the app.
  const localResults = uniqueMovies.filter((movie) =>
    (movie.title || movie.name || movie.original_name || "")
      .toLowerCase()
      .includes(query)
  );

  try {
    // Get the TMDB API key from the existing request configuration.
    const queryString = requests.fetchTrending.split("?")[1] || "";
    const apiKey = new URLSearchParams(queryString).get("api_key");

    if (!apiKey) {
      if (setSearchResults) {
        setSearchResults(localResults);
      }
      console.error("TMDB API key was not found in fetchTrending.");
      return;
    }

    // Search TMDB itself, not only the movies already loaded.
    const response = await axios.get(
      `${BASE_URL.replace(/\/$/, "")}/search/multi`,
      {
        params: {
          api_key: apiKey,
          query: query,
          include_adult: false,
          language: "en-US",
          page: 1,
        },
      }
    );

    // Ignore older requests if the user has typed a newer query.
    if (requestId !== searchRequestRef.current) return;

    const apiResults = (response.data.results || []).filter(
      (item) =>
        item.media_type === "movie" || item.media_type === "tv"
    );

    // Combine local and API results, then remove duplicates.
    const combinedResults = [...localResults, ...apiResults];

    const finalResults = Array.from(
      new Map(
        combinedResults.map((item) => [
          `${item.media_type || (item.title ? "movie" : "tv")}-${item.id}`,
          item,
        ])
      ).values()
    );

    if (setSearchResults) {
      setSearchResults(finalResults);
    }
  } catch (error) {
    console.error("TMDB Search Error:", error);

    if (requestId === searchRequestRef.current && setSearchResults) {
      setSearchResults(localResults);
    }
  }
};

  return (
    <header
      className={`${styles.header} ${
        isScrolled ? styles.headerScrolled : ""
      }`}
    >
      {/* LEFT SIDE */}
      <div className={styles.headerLeft}>
        <div className={styles.logo}>CINESTREAM</div>

        <nav className={styles.navMenu}>
          <a href="#" className={styles.navLink}>Home</a>
          <a href="#" className={styles.navLink}>Series</a>
          <a href="#" className={styles.navLink}>Movies</a>
          <a href="#" className={styles.navLink}>Trending</a>
          <a href="#" className={styles.navLink}>My Collection</a>
          <a href="#" className={styles.navLink}>Languages</a>
        </nav>
      </div>

      {/* RIGHT SIDE */}
      <div className={styles.headerRight}>
        {/* SEARCH */}
        <div className={styles.searchContainer}>
          <button
            className={styles.searchButton}
            onClick={() => setShowSearch(!showSearch)}
            aria-label="Search"
          >
            <FiSearch />
          </button>

          {showSearch && (
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search movies and shows"
              onChange={handleSearchChange}
              autoFocus
            />
          )}
        </div>

        {/* NOTIFICATION */}
        <div className={styles.notificationContainer}>
          <button className={styles.notificationButton} aria-label="Notifications">
            <FiBell />
            {notificationCount > 0 && (
              <span className={styles.notificationBadge}>
                {notificationCount > 5 ? "5+" : notificationCount}
              </span>
            )}
          </button>
        </div>

        {/* PROFILE */}
        <div className={styles.profileContainer}>
          <button
            className={styles.profileButton}
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            aria-label="Profile"
          >
            <FiUser />
          </button>

          <button
            className={`${styles.dropdownArrow} ${showProfileMenu ? styles.arrowUp : ""}`}
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            aria-label="Profile menu"
          >
            <FiChevronDown />
          </button>

          {showProfileMenu && (
            <div className={styles.profileDropdown}>
              <button className={styles.dropdownItem}>Account</button>
              <div className={styles.dropdownLine}></div>
              <button className={styles.dropdownItem}>Help Center</button>
              <div className={styles.dropdownLine}></div>
              <button className={styles.dropdownItem}>Sign out</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;