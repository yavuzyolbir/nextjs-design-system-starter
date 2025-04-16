import { FC, InputHTMLAttributes } from "react";

import cn from "classnames";

import Styles from "./Input.module.scss";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  wrapperClassName?: string;
  className?: string;
  label?: string;
  infoText?: string;
  inputSize?: "small" | "medium" | "large";
}

const Input: FC<InputProps> = ({
  wrapperClassName = "",
  className = "",
  inputSize = "medium",
  label = "",
  infoText = "",
  ...props
}) => {
  return (
    <div className={cn(Styles.wrapper, wrapperClassName)}>
      {label && <div className={Styles.label}>{label}</div>}
      <div className={Styles.inputWrapper}>
        <input
          className={cn(Styles.input, Styles[inputSize], className)}
          {...props}
        />
      </div>
      {infoText && <div className={Styles.infoText}>{infoText}</div>}
    </div>
  );
};

export default Input;
