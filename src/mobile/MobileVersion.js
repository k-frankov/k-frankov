import React from "react";
import ExpandedHeader from "../components/ExpandedHeader";
import MainPage from "../components/MainPage";
import SideInfo from "../components/SideInfo";

const MobileVersion = (props) => {
  return (
    <div>
      <ExpandedHeader>
        <SideInfo isMobile={true} />
      </ExpandedHeader>
      <MainPage />
    </div>
  );
};

export default MobileVersion;
