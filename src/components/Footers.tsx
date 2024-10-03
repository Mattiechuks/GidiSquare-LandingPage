'use client';
import styled from 'styled-components';
import Image from 'next/image';
import styles from '../../styles/Footers.module.css'
const Section = styled.section`
  width: 100%;
  padding: 5px;
`;

const InnerSection = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 7px 20px;
  justify-content: space-between;
  align-item: center;

`;

const LogoLink = styled.a`
  display: flex;
  gap: 10px;
  margin-bottom: 5px;

  
`;

const ContactSection = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;

  
`;

const OverflowDiv = styled.div`
  overflow: hidden;
  width: 100%;
  margin: 5px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return (
    <Section id="footer">
      <InnerSection className="w-full h-fit rounded-xl mb-[40px] relative flex justify-evenly items-center bg-black">
        <LogoLink href="/">
          <Image
            alt="image"
            loading="eager"
            width={50}
            height={48}
            decoding="async"
            className={styles.image}
            src="/images/gidisquareLogo.png"
          />
        </LogoLink>
        <div>
          <p className={styles.primary}>Legal</p>
          <div className={`font-nueuthin ${styles.links}`}>
            <a href="/privacy">Privacy Policy</a>
            <a href="/tos">Terms of Service</a>
            <a href="/acceptibilitypol">Acceptable Use Policy</a>
          </div>
        </div>
        <ContactSection>
          <div>
            <p className={styles.primary}>Contact us</p>
            <p className={styles.links}>support@gidisquare.com</p>
          </div>
          <div>
            <p className={styles.primary}>Socials</p>
            <div className={styles.socials}>
              <a
                href="https://www.instagram.com/nextbud_app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  fetchPriority="high"
                  loading="eager"
                  width={24}
                  height={24}
                  decoding="async"
                  className="rounded-md"
                  style={{ color: 'transparent' }}
                  src="/images/instaicon1.a7885f15.svg"
                  alt="Instagram"
                />
              </a>
              <a
                href="https://www.tiktok.com/@nextbud.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  fetchPriority="high"
                  loading="eager"
                  width={16}
                  height={18}
                  decoding="async"
                  className="rounded-md"
                  style={{ color: 'transparent' }}
                  src="/images/tikicon1.9cb23028.svg"
                  alt="TikTok"
                />
              </a>
              <a
                href="https://x.com/nextbud_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  fetchPriority="high"
                  loading="eager"
                  width={24}
                  height={24}
                  decoding="async"
                  className="rounded-md"
                  style={{ color: 'transparent' }}
                  src="/images/xicon1.2f729a74.svg"
                  alt="X (formerly Twitter)"
                />
              </a>
            </div>
          </div>
        </ContactSection>
      </InnerSection>
      <OverflowDiv>
		<div className="w-full h-fit rounded-xl mb-[40px] relative flex justify-center items-center">
			<object
			>
			</object>
		</div>
      </OverflowDiv>
    </Section>
  );
};

export default Footer;
