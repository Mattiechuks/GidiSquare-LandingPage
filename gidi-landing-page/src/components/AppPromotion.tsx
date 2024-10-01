import styles from '../../styles/AppPromotion.module.css';
import Image from 'next/image';

const AppPromotion = () => {
  return (
    <section className={styles.appPromotionSection}>
            <div className={styles.phones}>
                <Image
                    src="/images/GidiSquare-PhonePic.jpg"
                    width={500}
                    height={200}
                    alt="Logo"
                />
            </div>
            <div className={styles.content}>
                <h2 className={styles.comingSoon}>Coming Soon</h2>
                <p className={styles.getApp}>Download app now!</p>
                <div className={styles.downloadButtons}>
                    <button><Image
                        src="/images/Download-Apple-App.png"
                        width={100}
                        height={100}
                        alt="Logo"
                        />
                    </button>
                    <button><Image
                        src="/images/Download-Apple-App.png"
                        width={100}
                        height={100}
                        alt="Logo"
                        />
                    </button>
                </div>
            </div>
    </section>
  );
};

export default AppPromotion;
