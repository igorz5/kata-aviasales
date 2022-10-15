import classNames from "classnames";
import React from "react";

import classes from "./Alert.module.scss";

interface AlertProps {
  className?: string;
  message?: string;
  type?: "info" | "error";
}

const Alert: React.FC<AlertProps> = ({ className, message, type = "info" }) => {
  let typeClass = classes.info;
  if (type === "error") {
    typeClass = classes.error;
  }
  return (
    <div className={classNames(classes.alert, typeClass, className)}>
      <span className={classes.text}>{message}</span>
    </div>
  );
};

export default Alert;
