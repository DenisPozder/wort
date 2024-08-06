"use client";
import { useTheme } from "next-themes";
import styles from "./about_section.module.css";

const AboutSection = () => {
  const { theme } = useTheme();
  const darkTheme = theme === "dark";

  return (
    <div className={styles.about_section}>
      <img className={`${styles.as_blub}`} src="/Home/Blub.png" alt="Blub image" />
      <div className={styles.as_content}>
        <h1 className={styles.as_title}>
          <span className="slide-in from-left">who</span>
          <span className="slide-in from-right">we are</span>
        </h1>
        <div className={styles.as_desc_content}>
          <h3 className={`${styles.as_desc} slide-in from-right`}>
            We are a creative agency that specializes in crafting memorable
            websites and brand identities for clients that seek recognition.
          </h3>
        </div>
      </div>
      <div className={styles.as_grid}>
        <div className={styles.as_column}>
          <div className={`${styles.asc_box_1} slide-in from-left`}>
            <img src="/Home/wortIlu1.jpg" alt="Wort first ilustration" />
            <div className={styles.asc_title}>
              <h1 className={`${darkTheme ? styles.dark : ""}`}>40+</h1>
            </div>
            <div className={styles.asc_desc}>
              <p className={`${darkTheme ? styles.dark : ""}`}>
                <span>successful</span>
                <span>projects</span>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.as_column}>
          <div className={`${styles.asc_box_2} slide-in from-right`}>
          <img src="/Home/wortIlu3.jpg" alt="Wort first ilustration" />
            <div className={styles.asc_title}>
              <h1 className={`${darkTheme ? styles.dark : ""}`}>7</h1>
            </div>
            <div className={styles.asc_desc}>
              <p className={`${darkTheme ? styles.dark : ""}`}>
                <span>creative</span>
                <span>professionals</span>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.as_column}>
          <div className={`${styles.asc_box_2} slide-in from-left`}>
          <img src="/Home/wortIlu4.jpg" alt="Wort first ilustration" />
            <div className={styles.asc_title}>
              <h1 className={`${darkTheme ? styles.dark : ""}`}>20+</h1>
            </div>
            <div className={styles.asc_desc}>
              <p className={`${darkTheme ? styles.dark : ""}`}>
                <span>happy</span>
                <span>clients</span>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.as_column}>
          <div className={`${styles.asc_box_1} slide-in from-right`}>
          <img src="/Home/wortIlu2.jpg" alt="Wort first ilustration" />
            <div className={styles.asc_title}>
              <h1 className={`${darkTheme ? styles.dark : ""}`}>8+</h1>
            </div>
            <div className={styles.asc_desc}>
              <p className={`${darkTheme ? styles.dark : ""}`}>
                <span>years of</span>
                <span>experience</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
