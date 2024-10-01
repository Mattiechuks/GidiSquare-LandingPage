"use client";

import React, { useState, useEffect } from 'react';
import styles from '../../styles/NavBar.module.css';
import Image from 'next/image';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <Image src="/images/gidisquareLogo.jpg" width={75} height={75} alt="Logo" className={styles.logo} />
      <div className={styles.hamburger} onClick={toggleMenu}>
        {isOpen ? (
          <Image src="/images/Close-icon.png" width={25} height={25} alt="Close Menu" />
        ) : (
          <>
            <div className={styles.bar1}></div>
            <div className={styles.bar2}></div>
            <div className={styles.bar3}></div>
          </>
        )}
      </div>
      <ul className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
        <li className={styles.menuLink}>About us</li>
        <li className={styles.menuLink}>Trade Templates</li>
        <li className={styles.menuLink}>Discover Services</li>
        <li><button className={styles.joinButton}>Join as a Provider</button></li>
      </ul>
    </nav>
  );
};

export default NavBar;
