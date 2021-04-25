import styles from "./DesktopVersion.module.css";
import SideInfo from "../components/SideInfo";
import MainPage from "../components/MainPage";

const DesktopVersion = (props) => {
  return (
    <div className={styles.container}>
      <SideInfo isMobile={false}/>
      <MainPage />
    </div>
  );
};

export default DesktopVersion;
