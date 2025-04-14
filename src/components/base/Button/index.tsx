"use client";

import React, { ReactNode } from "react";
import cn from "classnames";
import Link from "@/components/next/Link";

import Styles from "./Button.module.scss";

type ButtonSize = "small" | "medium" | "large";
type ButtonColor = "primary" | "auxiliary" | "neutral";
type ButtonVariant = "filled" | "outline" | "lighter" | "ghost";

export interface BaseProps {
  size?: ButtonSize;
  color?: ButtonColor;
  variant?: ButtonVariant;
  block?: boolean | "mobile" | "desktop";
  disabled?: boolean;
  loading?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = BaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      size = "medium",
      color = "primary",
      variant = "filled",
      className = "",
      children,
      href,
      disabled = false,
      loading = false,
      iconLeft,
      iconRight,
      block = false,
      ...props
    },
    ref
  ) => {
    const combinedClassName = cn(
      Styles.button,
      Styles[size],
      Styles[color],
      Styles[variant],
      {
        [Styles.disabled]: disabled,
        [Styles.loading]: loading,
        [Styles.block]: block === true,
        [Styles.blockMobile]: block === "mobile",
        [Styles.blockDesktop]: block === "desktop",
      },
      className
    );

    const buttonChildren = (
      <>
        {iconLeft && <div className={Styles.icon}>{iconLeft}</div>}
        {children}
        {iconRight && <div className={Styles.icon}>{iconRight}</div>}
      </>
    );

    if (href) {
      return (
        <Link
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={combinedClassName}
          aria-disabled={disabled || loading ? "true" : undefined}
          tabIndex={disabled || loading ? -1 : undefined}
          onClick={(e) => {
            if (disabled || loading) {
              e.preventDefault();
              return;
            }

            const onClick = (
              props as React.AnchorHTMLAttributes<HTMLAnchorElement>
            ).onClick;
            if (onClick) onClick(e);
          }}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {buttonChildren}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={combinedClassName}
        disabled={disabled || loading}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {buttonChildren}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
