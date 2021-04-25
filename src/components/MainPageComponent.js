import { ExternalLink } from "react-external-link";
import styles from "./MainPageComponent.module.css";

const MainPageComponent = ({ linkText, headlineContent }) => {
  if (linkText !== undefined) {
    return (
      <div className={styles.link}>
        <ExternalLink href={linkText} />
      </div>
    );
  }

  if (headlineContent !== undefined) {
    return <div className={styles.headline}>{headlineContent}</div>
  }

  return <div></div>
};

export default MainPageComponent;
