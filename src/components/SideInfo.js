import styles from "./SideInfo.module.css";

const SideInfo = (props) => {
  return <div className={props.isMobile ? styles.containerMobile : styles.container}>Side Info</div>;
};

export default SideInfo;
