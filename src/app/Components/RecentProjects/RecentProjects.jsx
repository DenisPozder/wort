"use client";

import Button from "@/Components/Button/Button";
import styles from "./recent_projects.module.css";
import Projects from "@/Data/Projects";
import Image from "next/image";

const RecentProjects = () => {
  return (
    <div className={`${styles.recent_projects}`}>
      <div className={styles.rp_content}>
        <div className={styles.rp_header}>
          <div className={styles.rp_header_top}>
            <h1 className={`${styles.rp_title}`}>
              <span className="slide-in from-left">recent</span>
              <span className="slide-in from-right">projects</span>
            </h1>
            <p className={`${styles.rp_par} slide-in from-left`}>
              Our projects are various, but here are some of the most recent
              ones!
            </p>
          </div>
          <div className={`${styles.rp_btn} slide-in from-right`}>
            <Button href={"/our-projects"} title={"all projects"} />
          </div>
        </div>
        <div className={styles.rp_projects}>
          {Projects.slice(0, 2).map((project, index) => (
            <>
              {index % 2 !== 0 ? (
                <div
                  key={index}
                  className={`${styles.rp_project} ${styles.swap}`}
                >
                  <div className={`${styles.rp_project_img} img-left slide-in`}>
                    <img src={project.mainImg} alt={project.title} />
                  </div>
                  <div
                    className={`${styles.rp_project_text} from-bottom slide-in`}
                  >
                    <div className={`${styles.rp_text_left}`}>
                      {" "}
                      <h2 className={styles.rp_project_title}>
                        {project.title}
                      </h2>
                      <p className={styles.rp_project_desc}>{project.desc}</p>
                      <div className={styles.rp_project_btn}>
                        <Button target="_blank" href={project.websiteLink} title={"view project"} />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div key={index} className={`${styles.rp_project}`}>
                  <div
                    className={`${styles.rp_project_text} from-bottom slide-in`}
                  >
                    <div className={`${styles.rp_text_right}`}>
                      {" "}
                      <h2 className={styles.rp_project_title}>
                        {project.title}
                      </h2>
                      <p className={styles.rp_project_desc}>{project.desc}</p>
                      <div className={styles.rp_project_btn}>
                        <Button target="_blank" href={project.websiteLink} title={"view project"} />
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${styles.rp_project_img} img-right slide-in`}
                  >
                    <img src={project.mainImg} alt={project.title} />
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
