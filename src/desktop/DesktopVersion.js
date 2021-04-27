import styles from "./DesktopVersion.module.css";
import { Helmet } from "react-helmet";
import SideInfo from "../components/SideInfo";
import MainPage from "../components/MainPage";

const DesktopVersion = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Konstantin Frankov</title>
      </Helmet>
      <SideInfo isMobile={false} />
      <MainPage isMobile={false} />
    </div>
  );
};

export default DesktopVersion;
