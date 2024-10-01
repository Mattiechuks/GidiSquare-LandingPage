import styles from '../../styles/AboutUs.module.css';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className={styles.aboutUsSection}>
        <div className={styles.aboutUsLeft}>
        <Image
						src="/images/friends.jpg"
						width={100}
						height={100}
						alt="Logo"
						className={styles.aboutPic1}
					/>
         <Image
						src="/images/pattern.jpg"
						width={100}
						height={100}
						alt="Logo"
						className={styles.aboutPic2}
					/>
        </div>
        <div className={styles.aboutUsRight}>
            <h2 className={styles.aboutHeader}>About <span className={styles.aboutHeaderU}>u</span>s</h2>
            <p className={styles.aboutText}>
                 GidiSquare, an hub dedicated to empowering The massses by creating a vibrant marketplace for services and goods, both new and pre-owned. At GidiSquare, our mission is to bridge the gap between talented individuals and a wealth of opportunities, connecting skilled professionals and handy job providers with clients in need of their expertise. We understand the challenges faced by those with lower-tier visas and have crafted a platform that respects legal work time limits while maximizing economic potential. By fostering a community where service providers and sellers can thrive, GidiSquare aims to be a cornerstone of livelihood enhancement for Africans, both locally and abroad. Join us in building a prosperous future, one connection at a time.
            </p>
            <div className={styles.downloadButtons}>
                <button>
                    <Image
                            src="/images/Download-Apple-App.png"
                            width={100}
                            height={100}
                            alt="Logo"
                            className={styles.logo}
                        />
                </button>
                <button>
                    <Image
                            src="/images/Download-Apple-App.png"
                            width={100}
                            height={100}
                            alt="Logo"
                            className={styles.logo}
                        />
                </button>
            </div>
        </div>
    </section>
  );
};

export default AboutUs;
