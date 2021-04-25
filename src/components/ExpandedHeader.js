import { IconButton } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import React, { useState } from "react";
import Expand from "react-expand-animated";
import styles from "./ExpandedHeader.module.css";

const ExpandedHeader = (props) => {
  const [expandToggled, setExpandToggled] = useState(false);
  const toggleExpand = () => {
    setExpandToggled(!expandToggled);
  };
  const expandIcon = expandToggled ? (
    <IconButton onClick={toggleExpand}>
      <ExpandLessIcon />
    </IconButton>
  ) : (
    <IconButton onClick={toggleExpand}>
      <ExpandMoreIcon />
    </IconButton>
  );

  return (
    <React.Fragment>
      <div className={styles.header}>{expandIcon}</div>
      <Expand open={expandToggled}>{props.children}</Expand>
    </React.Fragment>
  );
};

export default ExpandedHeader;
