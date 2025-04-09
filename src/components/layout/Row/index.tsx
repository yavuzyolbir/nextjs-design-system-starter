import React, {
  ReactNode,
  ReactElement,
  isValidElement,
  cloneElement,
} from "react";

import styles from "./Row.module.scss";

type Props = {
  children: ReactNode;
  className?: string;
  gutter?: number;
  rowGap?: number;
};

export default function Row({
  children,
  className = "",
  gutter = 16,
  rowGap = 0,
}: Props) {
  return (
    <div
      className={`${styles.row} ${className}`}
      style={{
        marginLeft: `-${gutter / 2}px`,
        marginRight: `-${gutter / 2}px`,
        rowGap: `${rowGap}px`,
      }}
    >
      {React.Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child as ReactElement<{ gutter?: number }>, {
            gutter,
          });
        }
        return child;
      })}
    </div>
  );
}
