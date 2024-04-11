"use client"

import Button from "@/Components/Button/Button";
import styles from "./recent_projects.module.css";
import Projects from "@/Data/Projects";
import Image from "next/image";
import DelayedScrolling from "@/Components/DelayedScrolling";

const RecentProjects = () => {
  const showContent = DelayedScrolling(2000);

  return (
    <>
      {showContent && (
        <div className={styles.recent_projects}>
          <div className={styles.rp_content}>
            <div className={styles.rp_header}>
              <div className={styles.rp_header_top}>
                <h1 className={styles.rp_title}>
                  <span>recent</span>
                  <span>projects</span>
                </h1>
                <p className={styles.rp_par}>
                  Our projects are various, but here are some of the most recent
                  ones!
                </p>
              </div>
              <div className={styles.rp_btn}>
                <Button href={"#"} title={"all projects"} />
              </div>
            </div>
            <div className={styles.rp_projects}>
              {Projects.slice(0, 2).map((project, index) => (
                <div
                  key={index}
                  className={`${styles.rp_project} ${
                    index % 2 !== 0 ? styles.swap : ""
                  }`}
                >
                  <div
                    className={`${styles.rp_project_text} ${
                      index % 2 !== 0 ? styles.swap : ""
                    }`}
                  >
                    <div
                      className={`${
                        index % 2 !== 0 ? styles.right : styles.left
                      }`}
                    >
                      {" "}
                      <h2 className={styles.rp_project_title}>
                        {project.title}
                      </h2>
                      <p className={styles.rp_project_desc}>{project.desc}</p>
                      <div className={styles.rp_project_btn}>
                        <Button href={project.link} title={"view project"} />
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.rp_project_img}`}>
                    <Image src={project.image} alt={project.title} fill />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RecentProjects;
