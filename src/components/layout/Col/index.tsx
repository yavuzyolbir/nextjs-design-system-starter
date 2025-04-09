import { ReactNode } from "react";
import styles from "./Col.module.scss";

type ResponsiveSpan = {
  mobile?: number;
  verticalTablet?: number;
  tablet?: number;
  desktop?: number;
  largeDesktop?: number;
};

type Props = {
  children: ReactNode;
  className?: string;
  span?: number | ResponsiveSpan;
  gutter?: number;
  style?: React.CSSProperties;
};

function getResponsiveClasses(
  span: ResponsiveSpan | undefined,
  styles: Record<string, string>
): string[] {
  if (!span) return [];

  const map: Record<keyof ResponsiveSpan, string> = {
    mobile: "mobile",
    verticalTablet: "verticalTablet",
    tablet: "tablet",
    desktop: "desktop",
    largeDesktop: "largeDesktop",
  };

  return Object.entries(span).map(([key, value]) => {
    const prefix = map[key as keyof ResponsiveSpan];
    return styles[`${prefix}-span${value}`];
  });
}

export default function Col({
  children,
  className = "",
  span = 12,
  gutter = 16,
  style,
}: Props) {
  const baseClass = typeof span === "number" ? styles[`span${span}`] : "";
  const responsiveClasses =
    typeof span === "object" ? getResponsiveClasses(span, styles) : [];

  return (
    <div
      className={`${styles.col} ${baseClass} ${responsiveClasses.join(
        " "
      )} ${className}`}
      style={{
        paddingLeft: `${gutter / 2}px`,
        paddingRight: `${gutter / 2}px`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
