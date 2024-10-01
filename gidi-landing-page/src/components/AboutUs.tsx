"use client";

import styles from '../../styles/AboutUs.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const AboutUs = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/images/friends.jpg", "/images/friends2.jpg"]; // Add your image paths here

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className={styles.aboutUsSection}>
      <div className={styles.aboutUsRight}>
        <h2 className={styles.aboutHeader}>About <span className={styles.aboutHeaderU}>u</span>s</h2>
        <p className={styles.aboutText}>
          GidiSquare, a hub dedicated to empowering The masses by creating a vibrant marketplace for services and goods, both new and pre-owned. At GidiSquare, our mission is to bridge the gap between talented individuals and a wealth of opportunities, connecting skilled professionals and handy job providers with clients in need of their expertise. We understand the challenges faced by those with lower-tier visas and have crafted a platform that respects legal work time limits while maximizing economic potential. By fostering a community where service providers and sellers can thrive, GidiSquare aims to be a cornerstone of livelihood enhancement for Africans, both locally and abroad. Join us in building a prosperous future, one connection at a time.
        </p>
        <div className={styles.downloadButtons}>
          <button>
            <Image
              src="/images/Download-Apple-App.png"
              width={100}
              height={100}
              alt="Download on the App Store"
              className={styles.logo}
            />
          </button>
          <button>
            <Image
              src="/images/Download-Google-App.png"
              width={100}
              height={100}
              alt="Get it on Google Play"
              className={styles.logo}
            />
          </button>
        </div>
      </div>
      <div className={styles.aboutUsLeft}>
        <div className={styles.slideshow}>
          <Image
            src={images[currentImage]}
            width={300}
            height={200}
            alt="Slideshow Image"
            className={styles.aboutPic1}
          />
        </div>
        <Image
          src="/images/pattern.jpg"
          width={300}
            height={200}
          alt="Background Image"
          className={styles.aboutPic2}
        />
      </div>
    </section>
  );
};

export default AboutUs;
