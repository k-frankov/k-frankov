import styles from "./DesktopVersion.module.css";
import { Helmet } from "react-helmet";
import SideInfo from "../components/SideInfo";
import MainPage from "../components/MainPage";

const DesktopVersion = (props) => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Konstantin Frankov</title>
      </Helmet>
      <SideInfo isMobile={false} />
      <MainPage />
    </div>
  );
};

export default DesktopVersion;
