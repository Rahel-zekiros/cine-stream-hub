import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer_container}>
      <div className={styles.footer_inner}>
        
        <div className={styles.social_icons}>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className={styles.icon_link}>
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className={styles.icon_link}>
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className={styles.icon_link}>
            <FaTwitter />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" className={styles.icon_link}>
            <FaYoutube />
          </a>
        </div>

        <div className={styles.footer_links_grid}>
          
          {/* COLUMN 1 */}
          <ul>
            <li><a href="#audio">Audio Description</a></li>
            <li><a href="#investor">Investor Relations</a></li>
            <li><a href="#legal">Legal Notices</a></li>
          </ul>

          {/* COLUMN 2 */}
          <ul>
            <li><a href="#help">Help Centre</a></li>
            <li><a href="#jobs">Jobs</a></li>
            <li><a href="#cookie">Cookie Preferences</a></li>
          </ul>

          {/* COLUMN 3 */}
          <ul>
            <li><a href="#gift">Gift Cards</a></li>
            <li><a href="#terms">Terms of Use</a></li>
            <li><a href="#corporate">Corporate Information</a></li>
          </ul>

          {/* COLUMN 4 */}
          <ul>
            <li><a href="#media">Media Centre</a></li>
            <li><a href="#privacy">Privacy</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>

        </div>

        <div className={styles.footer_copyright}>
          © 1997-2026 Netflix, Inc.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
