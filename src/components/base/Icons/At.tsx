import type { SVGProps } from "react";
const SvgAt = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 6c-3.312 0-6 2.688-6 6 0 3.313 2.688 6 6 6 .531 0 1 .469 1 1 0 .563-.469 1-1 1-4.437 0-8-3.562-8-8 0-4.406 3.563-8 8-8 4.406 0 8 3.594 8 8v1a3 3 0 0 1-3 3c-.937 0-1.75-.406-2.312-1.031C14 15.625 13.03 16 12 16c-2.219 0-4-1.781-4-4 0-2.187 1.781-4 4-4 .844 0 1.656.281 2.313.781.187-.156.406-.281.687-.281.531 0 1 .469 1 1V13c0 .563.438 1 1 1 .531 0 1-.437 1-1v-1c0-3.312-2.687-6-6-6m2 6c0-.687-.406-1.344-1-1.719-.625-.344-1.406-.344-2 0A2.02 2.02 0 0 0 10 12c0 .719.375 1.375 1 1.75.594.344 1.375.344 2 0 .594-.375 1-1.031 1-1.75"
    />
  </svg>
);
export default SvgAt;
