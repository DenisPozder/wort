"use client";

import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";
import ToggleTheme from "../ToggleTheme/ToggleTheme";
import { useTheme } from "next-themes";
import { AlignRight, Mail, MapPin } from "lucide-react";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";

const HeaderLinks = [
  {
    title: "Home",
    link: "/"
  },
  {
    title: "Our Projects",
    link: "/our-projects"
  },
]

const Header = () => {
  const { theme } = useTheme();
  const darkTheme = theme === "dark";

  const [header, setHeader] = useState(false)

  const openHeader = () => {
    setHeader(!header)
  }

  const closeHeader = () => {
    setHeader(false)
  }

  const pathname = usePathname()

  const [headerScroll, setHeaderScroll] = useState(false);
  const headerBackground = () => {
    if (window.scrollY > 0) {
      setHeaderScroll(true);
    } else {
      setHeaderScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerBackground);

    return () => {
      window.removeEventListener("scroll", headerBackground);
    };
  }, []);

  return (
    <div className={styles.header}>
      <div
        className={`${
          styles.header_content
        } ${headerScroll ? styles.header_scroll : ""}`}
      >
        <div className={styles.header_margin}>
          <Link
            href="/"
            className={`${styles.header_logo} ${darkTheme ? styles.dark : ""}`}
          >
            <Image
              width={500}
              height={500}
              src={darkTheme ? "/wort-logo-white.png" : "/wort-logo.png"}
              alt="Wort logo"
            />
          </Link>
          <ToggleTheme />
          <div className={styles.header_menu}>
            <p>menu</p>
            <span onClick={openHeader}>
              <AlignRight />
            </span>
          </div>
        </div>
      </div>
      <div className={`${styles.header_wrap} ${header ? styles.show : ''}`}>
        <div className={styles.hl_content}>
          <div className={styles.hl_header}>
            <Link className={styles.hl_header_phone} href={"tel:+381616212415"}>+381616212415</Link>
            <span className={styles.hl_header_close} onClick={closeHeader}><X/></span>
          </div>
          <div className={styles.hl_links}>
            {
              HeaderLinks.map((link, index) => (
                <Link onClick={closeHeader} href={link.link} key={index} className={`${styles.header_link} ${pathname === link.link ? styles.active : ''}`}>{link.title}</Link>
              ))
            }
          </div>
          <div className={styles.hl_media}>
            <Link href={"mailto:office@wort.rs"} target="_blank" className={styles.hl_email}><Mail /></Link>
            <Link href={"https://www.google.rs/maps/place/Majora+Zorana+Radosavljevi%C4%87a+178,+%D0%91%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D0%B4/@44.8980581,20.2864219,17z/data=!3m1!4b1!4m5!3m4!1s0x475a5df5d1d04025:0x477b54599cb06e21!8m2!3d44.8980543!4d20.2889968?hl=sr&entry=ttu"} target="_blank" className={styles.hl_map}><MapPin /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
