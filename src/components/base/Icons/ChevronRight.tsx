import type { SVGProps } from "react";
const SvgChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentcolor"
      d="M16.945 11.305c.422.468.422 1.172 0 1.593l-9 9c-.468.47-1.172.47-1.593 0a1.026 1.026 0 0 1 0-1.546l8.203-8.204-8.203-8.25a1.027 1.027 0 0 1 0-1.546 1.027 1.027 0 0 1 1.546 0z"
    />
  </svg>
);
export default SvgChevronRight;
