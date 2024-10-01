"use client";

import styles from '../../styles/Footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <Image
          src="/images/gidisquareLogo.png"
          width={70}
          height={70}
          alt="Logo"
          className={styles.logoImage}
        />
      </div>
      <div className={styles.copyright}>
        <p>GidiSquare Limited 2024 & All rights reserved</p>
      </div>
      <div className={styles.legal}>
        <h3 className={styles.legalText}>Legal</h3>
        <ul>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/terms-of-service">Terms of Service</a></li>
        </ul>
      </div>
      <div className={styles.contact}>
        <h3 className={styles.contactText}>Contact Us</h3>
        <p>support@gidisquare.com</p>
      </div>
      <div className={styles.socials}>
        <h3 className={styles.socialsText}>Socials</h3>
        <ul className={styles.socialsLinks}>
          <li className={styles.socialsLink}><a href="https://facebook.com">
            <Image
              src="/images/Facebook.png"
              width={50}
              height={50}
              alt="Facebook-logo"
            /></a></li>
          <li className={styles.socialsLink}><a href="https://telegram.com">
            <Image
              src="/images/Telegram.png"
              width={50}
              height={50}
              alt="Telegram-logo"
            /></a></li>
          <li className={styles.socialsLink}><a href="https://instagram.com">
            <Image
              src="/images/Instagram.png"
              width={40}
              height={30}
              alt="Instagram-logo"
              className={styles.logoImage}
            /></a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
