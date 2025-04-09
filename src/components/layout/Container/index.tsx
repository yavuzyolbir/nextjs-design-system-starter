import { ReactNode } from "react";
import styles from "./Container.module.scss";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className = "" }: Props) {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
}
