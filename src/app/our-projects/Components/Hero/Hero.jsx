"use client";

import React, { useEffect, useRef } from "react";
import styles from "./hero.module.css";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  /*----- Intersection Observer -----*/
  useEffect(() => {
    const faders = document.querySelectorAll(".fade-in");
    const sliders = document.querySelectorAll(".slide-in");

    const appearOptions = {
      threshold: 0.4,
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

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    })
  }

  return (
    <div className={styles.op_hero}>
      <Image
        width={500}
        height={500}
        src="/Home/WortHandLeft.png"
        className={styles.op_hero_left}
        alt="Wort left hand"
        loading="lazy"
      />
      <Image
        width={500}
        height={500}
        src="/Home/WortCircle.png"
        className={styles.op_hero_circle}
        alt="Wort circle"
        loading="lazy"
      />
      <Image
        width={500}
        height={500}
        src="/Home/WortHandRight.png"
        className={styles.op_hero_right}
        alt="Wort right hand"
        loading="lazy"
      />
      <div className={styles.op_hero_content}>
        <h1 className={styles.oph_title}>Our Projects</h1>
        <p className={styles.oph_par}>
          Explore our collection of designs, showcasing our commitment to
          creativity, excellence, and client success
        </p>
        <span className={styles.oph_arrow} onClick={scrollToBottom}>
          <ArrowDown />
        </span>
      </div>
    </div>
  );
};

export default Hero;
