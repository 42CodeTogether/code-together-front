import React from "react";
import Card from "../components/Card";
import styles from "./projects.module.scss";

export type ProjectsPageProps = {};

/** `/` Main에 해당 하는 Page Component 입니다. */
const ProjectsPage: React.FC<ProjectsPageProps> = () => {
  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.containner}`}>
        <Card>test</Card>
      </div>
    </div>
  );
};

export default ProjectsPage;
