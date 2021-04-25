import { useEffect } from "react";
import styles from "./MainPage.module.css";
import FadeIn from "react-fade-in";
import data from "../data/mainInfoData";
import generateHash from "random-hash";
import MainPageComponent from "./MainPageComponent";

const MainPage = () => {
  useEffect(() => {}, []);

  return (
    <div className={styles.container}>
      <FadeIn delay={200} transitionDuration={800}>
        {data.map((t) => {
          return (
            <MainPageComponent
              key={generateHash()}
              headlineContent={t.headlineContent}
              linkText={t.linkText}
            />
          );
        })}
      </FadeIn>
    </div>
  );
};

export default MainPage;
