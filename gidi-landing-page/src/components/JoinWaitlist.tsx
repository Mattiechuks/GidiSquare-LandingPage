import styles from '../../styles/JoinWaitlist.module.css';
import Image from 'next/image';

const JoinWaitlist = () => {
  return (
    <section className={styles.joinWaitlistSection}>
        <div className={styles.waitlistText}>
            <h2 className={styles.waitlistHeader}>Get Ahead of the Curve. Secure Your Spot on Our Waitlist!</h2>
            <form className={styles.form}>
                <input className={styles.waitlistInput} type="email" placeholder="Enter Email To Be the First to Know When we Launch" required />
                <button type="submit">Join Waitlist</button>
            </form>

        </div>
        <div className={styles.waitlistImages}>
            <div className={styles.circle}></div>
            <Image
            src="/images/WaitListMan.png"
            width={450}
            height={450}
            alt="Logo"
            className={styles.manImage}
					/>

        </div>
    </section>
  );
};

export default JoinWaitlist;
