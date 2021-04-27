import { useEffect } from "react";
import styles from "./MainPage.module.css";
import FadeIn from "react-fade-in";
import data from "../data/mainInfoData";
import generateHash from "random-hash";
import MainPageComponent from "./MainPageComponent";

const MainPage = ({isMobile}) => {
  useEffect(() => {}, []);

  return (
    <div className={isMobile ? styles.containerMobile : styles.container}>
      <FadeIn delay={200} transitionDuration={800}>
        {data.map((t) => {
          return (
            <MainPageComponent
              key={generateHash()}
              headlineContent={t.headlineContent}
              linkText={t.linkText}
              startDate={t.startDate}
              endDate={t.endDate}
              jobTitle={t.jobTitle}
              companyName={t.companyName}
              text={t.text}
              divider={t.divider}
            />
          );
        })}
      </FadeIn>
    </div>
  );
};

export default MainPage;
