import { ExternalLink } from "react-external-link";
import styles from "./MainPageComponent.module.css";

const MainPageComponent = ({
  linkText,
  headlineContent,
  startDate,
  endDate,
  jobTitle,
  companyName,
  text,
  divider,
}) => {
  if (linkText !== undefined) {
    return (
      <div className={styles.link}>
        <ExternalLink href={linkText} />
      </div>
    );
  }

  if (headlineContent !== undefined) {
    return <div className={styles.headline}>{headlineContent}</div>;
  }

  if (startDate !== undefined) {
    return (
      <div className={styles.jobDates}>
        {startDate} / {endDate !== undefined ? endDate : "CURRENT"}
      </div>
    );
  }

  if (jobTitle !== undefined) {
    return (
      <div className={styles.jobTitle}>
        {jobTitle}{companyName !== undefined ? ` at ${companyName}` : ''}
      </div>
    );
  }

  if (text !== undefined) {
    return <div className={styles.text}>{text}</div>
  }

  if (divider !== undefined) {
    return <hr className={styles.divider} />
  }

  return <div></div>;
};

export default MainPageComponent;
