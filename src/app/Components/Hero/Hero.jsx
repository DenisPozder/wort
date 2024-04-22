"use client";

import styles from "./hero.module.css";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Button from "@/Components/Button/Button";

const Hero = () => {
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const [isInHero, setIsInHero] = useState(false);

  const heroSectionRef = useRef(null);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolledPastHero(scrollTop > heroSectionRef.current.offsetTop);
    };

    const handleIntersection = (entries) => {
      const entry = entries[0];
      setIsInHero(entry.isIntersecting);
    };

    const heroObserver = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
      rootMargin: `0px 0px -300px 0px`,
    });

    if (heroSectionRef.current) {
      heroObserver.observe(heroSectionRef.current);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (heroSectionRef.current) {
        heroObserver.unobserve(heroSectionRef.current);
      }

      window.removeEventListener("scroll", handleScroll);
    };
  }, [heroSectionRef]);

  /*----- Intersection Observer -----*/
  useEffect(() => {
    const faders = document.querySelectorAll(".fade-in");
    const sliders = document.querySelectorAll(".slide-in");

    const appearOptions = {
      threshold: 0.3,
    };

    const appearOnScroll = new IntersectionObserver(function (
      entries,
      appearOnScroll
    ) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add("appear");
          appearOnScroll.unobserve(entry.target);
        }
      });
    },
    appearOptions);

    faders.forEach((fader) => {
      appearOnScroll.observe(fader);
    });

    sliders.forEach((slider) => {
      appearOnScroll.observe(slider);
    });
  }, []);

  return (
    <div className={styles.hero}>
      <div className={styles.hero_top}>
        <Image
          width={500}
          height={500}
          src="/Home/WortHandLeft.png"
          className={styles.hero_left_hand}
          alt="Wort left hand"
          loading="lazy"
        />
        <Image
          width={500}
          height={500}
          src="/Home/WortCircle.png"
          className={styles.hero_circle}
          alt="Wort circle"
          loading="lazy"
        />
        <Image
          width={500}
          height={500}
          src="/Home/WortHandRight.png"
          className={styles.hero_right_hand}
          alt="Wort right hand"
          loading="lazy"
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
          <span className={styles.ht_arrow} onClick={scrollToBottom}>
            <ArrowDown />
          </span>
          <div className={styles.ht_bottom} ref={heroSectionRef}>
            <div className={styles.hero_btn}>
              <Button href={"/our-projects"} title={"our projects"} />
            </div>
            <div
              className={`${styles.ht_bottom_img} ${
                isInHero || isScrolledPastHero ? styles.hide : styles.show
              }`}
            >
              <Image
                src="/Home/HeroImg.jpg"
                width={400}
                height={100}
                alt="Hero section image"
                loading="lazy"
              />
            </div>
            <div className={styles.hero_btn}>
              <Button href={"tel:+381616212415"} title={"contact us"} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.hero_bottom}>
        <div className={styles.hero_bottom_content}>
          <div className={styles.hero_bottom_img}>
            <Image
              width={1520}
              height={1520}
              loading="lazy"
              src={"/Home/HeroImg.jpg"}
              className={`${styles.hb_img} ${
                isInHero || isScrolledPastHero ? styles.visible : styles.hidden
              }`}
              alt="Hero bottom image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
