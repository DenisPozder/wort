"use client";

import Button from "../Button/Button";
import styles from "./footer.module.css";
import Link from "next/link";
import { Copyright } from "lucide-react";
import DelayedScrolling from "../DelayedScrolling";

const Footer = () => {
  const showContent = DelayedScrolling(2000);

  return (
    <>
      {showContent && (
        <div className={styles.footer}>
          <div className={styles.footer_content}>
            <div className={styles.footer_top}>
              <h1>time to make a change</h1>
              <div className={styles.footer_btn}>
                <Button href={"#"} title={"let's talk"} />
              </div>
            </div>
            <div className={styles.footer_bottom}>
              <div className={styles.fb_grid}>
                <div className={styles.fb_item}>
                  <h3>email</h3>
                  <Link href={"mailto:hello@wort.com"}>hello@wort.com</Link>
                </div>
                <div className={styles.fb_item}>
                  <h3>call</h3>
                  <Link href={"#"}>+381 61 234 567</Link>
                </div>
                <div className={styles.fb_item}>
                  <h3>location</h3>
                  <Link href={"#"}>Ulica broj 12, Belgrade, Serbia</Link>
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
      )}
    </>
  );
};

export default Footer;
