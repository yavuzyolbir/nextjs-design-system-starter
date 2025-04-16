import { FC, ReactNode, InputHTMLAttributes } from "react";

import cn from "classnames";

import Styles from "./Input.module.scss";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  wrapperClassName?: string;
  className?: string;
  label?: string;
  infoText?: string;
  inputSize?: "small" | "medium" | "large";
  leftIcon?: ReactNode;
}

const Input: FC<InputProps> = ({
  wrapperClassName = "",
  className = "",
  inputSize = "medium",
  label = "",
  infoText = "",
  leftIcon,
  ...props
}) => {
  return (
    <div className={cn(Styles.wrapper, wrapperClassName)}>
      {label && <div className={Styles.label}>{label}</div>}
      <label className={cn(Styles.input, Styles[inputSize], className)}>
        {leftIcon && <div className={Styles.leftIcon}>{leftIcon}</div>}
        <input {...props} className={Styles.htmlInput} />
      </label>
      {infoText && <div className={Styles.infoText}>{infoText}</div>}
    </div>
  );
};

export default Input;
