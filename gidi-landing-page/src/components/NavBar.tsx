import styles from '../../styles/NavBar.module.css';
import Image from 'next/image';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Image src="/images/gidisquareLogo.jpg" width={100} height={100} alt="Logo" className={styles.logo} />
      <ul className={styles.menu}>
        <li className={styles.menuLink}>About us</li>
        <li className={styles.menuLink}>Trade Templates</li>
        <li className={styles.menuLink}>Discover Services</li>
        <li><button className={styles.joinButton}>Join as a Provider</button></li>
      </ul>
    </nav>
  );
};

export default NavBar;
