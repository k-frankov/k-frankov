import styles from "./SideInfo.module.css";
import me from "../assets/me.jpeg";

const SideInfo = (props) => {
  return (
    <div className={props.isMobile ? styles.containerMobile : styles.container}>
      <img src={me} alt="Me" className={styles.img}></img>
      <div className={styles.generalInfo}>
        Experienced Microsoft .NET software development engineer focused on
        providing high-level service to customers. Participated in a full
        software development life cycle, designing scalable multi-tier
        applications for Web, Mobile and Windows platforms. Particularly interested in
        improving my knowledge in software development area(project management,
        software development, testing)
      </div>
      <div className={styles.generalInfo}>
        Interested in Mobile development, learning and improving my skills in React, React Native, TypeScript.
      </div>
      <div className={styles.generalInfo}>
        eMail: k.frankov@gmail.com
      </div>
      <div className={styles.generalInfo}>
        phone: +358 45 196 0604
      </div>
    </div>
  );
};

export default SideInfo;
