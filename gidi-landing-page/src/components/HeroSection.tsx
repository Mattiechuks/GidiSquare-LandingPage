"use client";

import styles from "../../styles/HeroSection.module.css";
import Image from "next/image";
import { useEffect } from "react";

const HeroSection = () => {
	useEffect(() => {
		const text = document.querySelector(`.${styles.heroText}`);
		text.classList.add(styles.fadeIn);
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
						src="/images/Download-Apple-App.png"
						width={100}
						height={100}
						alt="Logo"
						className={styles.logo}
					/>
				</button>
				<button>
        <Image
						src="/images/Download-Google-App.png"
						width={100}
						height={100}
						alt="Logo"
						className={styles.logo}
					/>
        </button>
			</div>
		</section>
	);
};

export default HeroSection;
