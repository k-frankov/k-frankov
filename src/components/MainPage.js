import { useEffect } from "react";
import styles from "./MainPage.module.css";
import FadeIn from "react-fade-in";
import data from "../data/mainInfoData";
import MainPageComponent from "./MainPageComponent";
import { v4 as uuidv4 } from 'uuid';

const MainPage = ({ isMobile }) => {
  useEffect(() => { }, []);

  return (
    <div className={isMobile ? styles.containerMobile : styles.container}>
      <FadeIn delay={200} transitionDuration={800}>
        {data.map((t) => {
          return (
            <MainPageComponent
              key={uuidv4()}
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
