import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube,} from "react-icons/fa";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerInner}>

        {/* SOCIAL MEDIA */}
        <div className={styles.socialIcons}>
          <a
            href="#"className={styles.iconLink}aria-label="Facebook" >
            <FaFacebookF />
          </a>

          <a  href="#"className={styles.iconLink}aria-label="Instagram" >
            <FaInstagram />
          </a>

          <a href="#"className={styles.iconLink}  aria-label="Twitter" >
            <FaTwitter />
          </a>

          <a href="#" className={styles.iconLink} aria-label="YouTube" >
            <FaYoutube />
          </a>
        </div>

        {/* FOOTER LINKS */}
        <div className={styles.footerLinksGrid}>

          <ul>
            <li><a href="#discover">Discover</a></li>
            <li><a href="#trending">Trending</a></li>
            <li><a href="#categories">Categories</a></li>
          </ul>

          <ul>
            <li><a href="#about">About CineHub</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#support">Support</a></li>
          </ul>

          <ul>
            <li><a href="#terms">Terms</a></li>
            <li><a href="#privacy">Privacy</a></li>
            <li><a href="#cookies">Cookie Settings</a></li>
          </ul>

          <ul>
            <li><a href="#account">My Account</a></li>
            <li><a href="#favorites">Favorites</a></li>
            <li><a href="#help">Help</a></li>
          </ul>

        </div>

        {/* COPYRIGHT */}
        <div className={styles.footerCopyright}>
          © 2026 CineHub. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;