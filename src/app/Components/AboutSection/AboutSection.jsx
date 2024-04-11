"use client";

import DelayedScrolling from "@/Components/DelayedScrolling";
import styles from "./about_section.module.css";

const AboutSection = () => {
  const showContent = DelayedScrolling(2000);

  return (
    <>
      {showContent && (
        <div className={styles.about_section}>
          <img
            className={styles.as_blub}
            src="/Home/Blub.png"
            alt="Blub image"
          />
          <div className={styles.as_content}>
            <h1 className={styles.as_title}>
              <span>who</span>
              <span>we are</span>
            </h1>
            <div className={styles.as_desc_content}>
              <h3 className={styles.as_desc}>
                We are a creative agency that specializes in crafting memorable
                websites and brand identities for clients that seek recognition.
              </h3>
            </div>
          </div>
          <div className={styles.as_grid}>
            <div className={styles.as_column}>
              <div className={styles.asc_box_1}>
                <div className={styles.asc_title}>
                  <h1>40+</h1>
                </div>
                <div className={styles.asc_desc}>
                  <p>
                    <span>successful</span>
                    <span>projects</span>
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.as_column}>
              <div className={styles.asc_box_2}>
                <div className={styles.asc_title}>
                  <h1>7</h1>
                </div>
                <div className={styles.asc_desc}>
                  <p>
                    <span>creative</span>
                    <span>professionals</span>
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.as_column}>
              <div className={styles.asc_box_2}>
                <div className={styles.asc_title}>
                  <h1>20+</h1>
                </div>
                <div className={styles.asc_desc}>
                  <p>
                    <span>happy</span>
                    <span>clients</span>
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.as_column}>
              <div className={styles.asc_box_1}>
                <div className={styles.asc_title}>
                  <h1>8+</h1>
                </div>
                <div className={styles.asc_desc}>
                  <p>
                    <span>years of</span>
                    <span>experience</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutSection;
