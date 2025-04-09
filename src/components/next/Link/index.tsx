import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";

type LinkProps = NextLinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    className?: string;
  };

const Link = ({
  href,
  className = "",
  prefetch = false,
  children,
  ...props
}: LinkProps) => {
  return (
    <NextLink href={href} prefetch={prefetch} className={className} {...props}>
      {children}
    </NextLink>
  );
};

export default Link;
