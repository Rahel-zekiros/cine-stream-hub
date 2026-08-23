import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import {FiSearch,FiBell,FiUser,FiChevronDown,} from "react-icons/fi";

function Header() {
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

  return (
    <header
      className={`${styles.header} ${
        isScrolled ? styles.headerScrolled : ""
      }`}
    >
      {/* LEFT SIDE */}

      <div className={styles.headerLeft}>

        {/* BRAND */}
        <div className={styles.logo}>
          CINESTREAM
        </div>

        {/* NAVIGATION */}
        <nav className={styles.navMenu}>
          <a href="#" className={styles.navLink}>
            Home
          </a>

          <a href="#" className={styles.navLink}>
          Series
          </a>

          <a href="#" className={styles.navLink}>
            Movies
          </a>

          <a href="#" className={styles.navLink}>
            Trending

          </a>

          <a href="#" className={styles.navLink}>
           My Collection

          </a>

          <a href="#" className={styles.navLink}>
            Languages
          </a>
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
              autoFocus
            />
          )}
        </div>

        {/* NOTIFICATION */}
        <div className={styles.notificationContainer}>
          <button
            className={styles.notificationButton}
            aria-label="Notifications"
          >
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

          {/* USER ICON */}
          <button className={styles.profileButton}
              onClick={() => setShowProfileMenu(!showProfileMenu) }aria-label="Profile"  >
            <FiUser />
          </button>

          {/* DROPDOWN ARROW */}
          <button
            className={`${styles.dropdownArrow} ${ showProfileMenu ? styles.arrowUp : "" }`}
            onClick={() =>
              setShowProfileMenu(!showProfileMenu) } aria-label="Profile menu"
          >
            <FiChevronDown />
          </button>

          {/* PROFILE DROPDOWN */}
          {showProfileMenu && (
            <div className={styles.profileDropdown}>

              <button className={styles.dropdownItem}>
                Account
              </button>

              <div className={styles.dropdownLine}></div>

              <button className={styles.dropdownItem}>
                Help Center
              </button>

              <div className={styles.dropdownLine}></div>

              <button className={styles.dropdownItem}>
                Sign out
              </button>

            </div>
          )}
        </div>

      </div>
    </header>
  );
}

export default Header;