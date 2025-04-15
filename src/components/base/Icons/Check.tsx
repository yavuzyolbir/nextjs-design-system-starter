import type { SVGProps } from "react";
const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19.504 6.871c.316.352.316.879 0 1.195l-9.281 9.282c-.352.351-.88.351-1.196 0l-4.78-4.782a.77.77 0 0 1 0-1.16.77.77 0 0 1 1.16 0L9.59 15.59l8.719-8.719a.83.83 0 0 1 1.16 0z"
    />
  </svg>
);
export default SvgCheck;
