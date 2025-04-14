import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { AnchorHTMLAttributes, ReactNode, forwardRef } from "react";

type LinkProps = NextLinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    className?: string;
    children: ReactNode;
  };

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, className = "", children, ...props }, ref) => {
    return (
      <NextLink href={href} ref={ref} className={className} {...props}>
        {children}
      </NextLink>
    );
  }
);

Link.displayName = "Link";

export default Link;
