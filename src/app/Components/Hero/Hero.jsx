"use client";

import styles from "./hero.module.css";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Button from "@/Components/Button/Button";
import DelayedScrolling from "@/Components/DelayedScrolling";

const Hero = () => {
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const showContent = DelayedScrolling(2000);

  const imageRef = useRef(null);
  const bottomSectionRef = useRef(null);

  const scrollToBottomSection = () => {
    if (bottomSectionRef.current) {
      bottomSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollDirection = scrollTop > lastScrollTop ? "down" : "up";
      setLastScrollTop(scrollTop);

      if (scrollDirection === "down" && !isImageVisible) {
        setIsImageVisible(true);
      } else if (scrollDirection === "up" && isImageVisible) {
        setIsImageVisible(false);
      }
    };

    const handleIntersection = (entries) => {
      const entry = entries[0];

      setIsImageVisible(entry.intersectionRatio > 0);
    };

    const options = {
      threshold: 0,
      rootMargin: `0px 0px -200px 0px`,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }

      window.removeEventListener("scroll", handleScroll);
    };
  }, [imageRef, lastScrollTop, isImageVisible]);

  return (
    <div className={styles.hero}>
      <div className={styles.hero_top}>
        <Image
          width={500}
          height={500}
          src="/Home/WortHandLeft.png"
          className={styles.hero_left_hand}
          alt="Wort left hand"
        />
        <Image
          width={500}
          height={500}
          src="/Home/WortCircle.png"
          className={styles.hero_circle}
          alt="Wort circle"
        />
        <Image
          width={500}
          height={500}
          src="/Home/WortHandRight.png"
          className={styles.hero_right_hand}
          alt="Wort right hand"
        />
        <div className={styles.ht_content}>
          <h1 className={styles.ht_title}>
            We shape <br />
            your identity.
          </h1>
          <p className={styles.ht_par}>
            Welcome to Wort, where we specialize in conceptualizing and
            designing engaging websites and brand identities.
          </p>
          <span className={styles.ht_arrow} onClick={scrollToBottomSection}>
            <ArrowDown />
          </span>
          <div className={styles.ht_bottom}>
            <div className={styles.hero_btn}>
              <Button href={"#"} title={"our projects"} />
            </div>
            <div
              className={`${styles.ht_bottom_img} ${
                isImageVisible ? styles.hide : styles.show
              }`}
            >
              <Image
                src="/Home/sample.jpg"
                width={400}
                height={100}
                alt="Hero section image"
              />
            </div>
            <div className={styles.hero_btn}>
              <Button href={"#"} title={"contact us"} />
            </div>
          </div>
        </div>
      </div>
      {showContent && (
        <div className={styles.hero_bottom} ref={bottomSectionRef}>
          <div className={styles.hero_bottom_content}>
            <div className={styles.hero_bottom_img}>
              <img
                src={"/Home/sample.jpg"}
                className={`${styles.hb_img} ${
                  isImageVisible ? styles.visible : styles.hidden
                }`}
                alt="Hero bottom image"
                ref={imageRef}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
