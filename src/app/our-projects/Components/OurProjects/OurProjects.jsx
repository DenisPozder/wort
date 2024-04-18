"use client";

import React, { useEffect } from "react";
import styles from "./our_projects.module.css";
import Projects from "@/Data/Projects";
import Button from "@/Components/Button/Button";
import Image from "next/image";

const OurProjects = () => {
  useEffect(() => {
    /*----- Paralax effect on scroll ------*/
    const parallax_el = document.querySelectorAll(".parallax");
    let yValue = 0;
    let xValue = 0;

    function update() {
      parallax_el.forEach((el) => {
        let speedy = parseFloat(el.dataset.speedy) || 1;
        let speedx = parseFloat(el.dataset.speedx) || 0;

        el.style.transform = `translateY(calc(-50% + ${yValue * speedy}px))
            translateX(calc(-50% + ${xValue * speedx}px))
            perspective(2300px)`;
      });
    }

    update();

    window.addEventListener("scroll", (e) => {
      yValue = window.scrollY;
      update();
    });
  }, []);

  return (
    <div className={styles.our_projects}>
      <div className={styles.our_projects_content}>
        {Projects.map((project, index) => (
          <div key={index} className={styles.op_project}>
            <div className={styles.op_project_header}>
              <div className={styles.op_header_content}>
                <div className={styles.op_header_left}>
                  <h1 className={styles.op_header_title}>{project.title}</h1>
                  <p className={styles.op_header_sd}>{project.secondDesc}</p>
                  <p className={styles.op_header_td}>{project.thirdDesc}</p>
                </div>
                <div className={styles.op_header_btn}>
                  <Button title={"visit website"} href={project.websiteLink} />
                </div>
              </div>
            </div>
            <div className={styles.op_project_images}>
              <div className={styles.op_images_content}>
                <div className={styles.op_image_front}>
                  <Image
                    src={project.projectImg1}
                    className="parallax"
                    data-speedy="0.2"
                    alt={project.title}
                    width={500}
                    height={1400}
                    loading="lazy"
                  />
                </div>
                <div className={styles.op_image_back}>
                  <Image
                    src={project.projectImg2}
                    alt={project.title}
                    width={500}
                    height={1400}
                    className="parallax"
                    data-speedy="-0.04"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProjects;
