"use client";

import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";
import ToggleTheme from "../ToggleTheme/ToggleTheme";
import { useTheme } from "next-themes";
import { AlignRight } from "lucide-react";
import { usePathname } from "next/navigation";

const Header = () => {
  const { theme } = useTheme();
  const darkTheme = theme === "dark";

  const pathname = usePathname();

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
              className={styles.hl_white}
              height={500}
              src={"/wort-logo-white.png"}
              alt="Wort logo"
            />
            <Image
              width={500}
              className={styles.hl_dark}
              height={500}
              src={"/wort-logo.png"}
              alt="Wort logo"
            />
          </Link>
          <ToggleTheme />
          <div className={styles.header_menu}>
            <p>menu</p>
            <span>
              <AlignRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
