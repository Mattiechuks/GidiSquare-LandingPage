"use client";

import styles from '../../styles/AppPromotion.module.css';
import Image from 'next/image';

const AppPromotion = () => {
  return (
    <section className={styles.appPromotionSection}>
      <div className={styles.phones}>
        <Image
          src="/images/GidiSquare-PhonePic.jpg"
          width={300}
          height={600}
          alt="Phone Image"
          className={styles.phoneImage}
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.comingSoon}>Coming Soon</h2>
        <p className={styles.getApp}>Download app now!</p>
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
      </div>
    </section>
  );
};

export default AppPromotion;
