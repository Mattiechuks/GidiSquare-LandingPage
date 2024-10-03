"use client";

import styles from "../../styles/HeroSection.module.css";
import Image from "next/image";
import { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    const text = document.querySelector(`.${styles.heroText}`);
    if (text) {
      text.classList.add(styles.fadeIn);
    }
  }, []);

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroText}>
        <h1 className={styles.heroText1}>Discover!</h1>
        <h1 className={styles.heroText2}>Connect.</h1>
        <h1 className={styles.heroText3}>Thrive</h1>
      </div>
      <p className={styles.heroText4}>Solutions at Your Fingertips</p>
      <div className={styles.downloadButtons}>
        <button>
          <Image
            src="/images/apple.b7ff230c.svg"
            width={150}
            height={50}
            alt="Download on the App Store"
            className={styles.downloadButton}
          />
        </button>
        <button>
          <Image
            src="/images/google.a72b620f.svg"
            width={150}
            height={50}
            alt="Get it on Google Play"
            className={styles.downloadButton}
          />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
