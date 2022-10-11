import classNames from "classnames";
import React from "react";

import classes from "./Button.module.scss";

interface ButtonProps extends React.PropsWithChildren {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ className, children }) => {
  return (
    <button type="button" className={classNames(classes.button, className)}>
      {children}
    </button>
  );
};

export default Button;
