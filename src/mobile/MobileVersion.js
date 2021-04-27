import React from "react";
import { Helmet } from "react-helmet";
import styles from "./MobileVersion.module.css";
import ExpandedHeader from "../components/ExpandedHeader";
import MainPage from "../components/MainPage";
import SideInfo from "../components/SideInfo";

const MobileVersion = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Konstantin Frankov</title>
      </Helmet>
      <ExpandedHeader>
        <SideInfo isMobile={true} />
      </ExpandedHeader>
      <MainPage isMobile={true} />
    </div>
  );
};

export default MobileVersion;
