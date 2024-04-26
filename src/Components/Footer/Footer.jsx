"use client";

import Button from "../Button/Button";
import styles from "./footer.module.css";
import Link from "next/link";
import { Copyright, Mail, MapPin, Phone, Search } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";

const Footer = () => {
  const { theme } = useTheme();
  const darkTheme = theme === "dark";

  return (
    <div className={styles.footer}>
      <div className={styles.footer_content}>
        <div className={styles.footer_top}>
          <h1 className="slide-in from-bottom">time to make a change</h1>
          <div className={`${styles.footer_btn} slide-in from-bottom`}>
            <Button href={"tel:+381616212415"} title={"let's talk"} />
          </div>
        </div>
        <div className={styles.footer_bottom}>
          {/* <div className={`${styles.fb_ceo} slide-in from-bottom`}>
            <div className={styles.fb_search}>
              <Search />
              <h3>Luka Sekulić</h3>
            </div>
            <Link href={"/"} className={styles.fb_logo}>
              <img src={darkTheme ? "/wort-logo-white.png" : "/wort-logo.png"} />
            </Link>
          </div> */}
          <div className={`${styles.fb_grid} slide-in from-bottom`}>
            <div className={styles.fb_item}>
              <h3>email</h3>
              <Link href={"mailto:office@wort.rs"}><Mail /><span>office@wort.rs</span></Link>
            </div>
            <div className={styles.fb_item}>
              <h3>call</h3>
              <Link href={"tel:+381616212415"}><Phone /><span>+381616212415</span></Link>
            </div>
            <div className={styles.fb_item}>
              <h3>location</h3>
              <Link target="_blank" href={"https://www.google.rs/maps/place/Majora+Zorana+Radosavljevi%C4%87a+178,+%D0%91%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D0%B4/@44.8980581,20.2864219,17z/data=!3m1!4b1!4m5!3m4!1s0x475a5df5d1d04025:0x477b54599cb06e21!8m2!3d44.8980543!4d20.2889968?hl=sr&entry=ttu"}><MapPin /><span>Majora Zorana Radisavljevica 178</span></Link>
            </div>
          </div>
          <div className={styles.fb_copyright}>
            <p>
              Wort <Copyright /> 2024. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
