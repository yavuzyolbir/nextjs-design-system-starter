import type { SVGProps } from "react";
const SvgUser = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 12c-1.437 0-2.75-.75-3.469-2-.719-1.219-.719-2.75 0-4A4.04 4.04 0 0 1 12 4c1.406 0 2.719.781 3.438 2 .718 1.25.718 2.781 0 4A3.96 3.96 0 0 1 12 12m-1.437 1.5h2.843C16.5 13.5 19 16 19 19.094c0 .5-.437.906-.937.906H5.906A.907.907 0 0 1 5 19.094C5 16 7.469 13.5 10.563 13.5"
    />
  </svg>
);
export default SvgUser;
