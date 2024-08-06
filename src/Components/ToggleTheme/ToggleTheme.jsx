"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Sun, MoonStar } from "lucide-react";
import styles from "./toggle_theme.module.css";

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (<div className={styles.toggle_theme} onClick={toggleTheme}>
    {theme === 'dark' ? (
      <Sun />
    ): (
      <MoonStar />
    )
    }
  </div>);
};

export default ToggleTheme;
