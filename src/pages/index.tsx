import React from "react";
import styles from "./index.module.scss";

export type HomePageProps = {};

/** `/` Main에 해당 하는 Page Component 입니다. */
const HomePage: React.FC<HomePageProps> = () => {
  return <div className={`${styles.wrapper}`}></div>;
};

export default HomePage;
