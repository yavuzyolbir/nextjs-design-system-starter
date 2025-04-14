"use client";

import React, { ReactNode } from "react";
import cn from "classnames";
import Link from "@/components/next/Link";

import Styles from "./Button.module.scss";

type ButtonSize = "small" | "medium" | "large";
type ButtonColor = "primary" | "auxiliary" | "neutral";
type ButtonVariant = "filled" | "outline" | "ghost";

export interface BaseProps {
  size?: ButtonSize;
  color?: ButtonColor;
  variant?: ButtonVariant;
  block?: boolean | "mobile" | "desktop";
  disabled?: boolean;
  loading?: boolean;
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

    if (href) {
      return (
        <Link
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={combinedClassName}
          aria-disabled={disabled ? "true" : undefined}
          tabIndex={disabled ? -1 : undefined}
          onClick={(e) => {
            if (disabled) {
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
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={combinedClassName}
        disabled={disabled}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
