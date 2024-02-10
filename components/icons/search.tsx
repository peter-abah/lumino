import { IconProps } from ".";

export default function Search(props: IconProps) {
  return (
    <svg
      role="presentation"
      strokeWidth="2"
      focusable="false"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      {...props}
    >
      <circle cx="11" cy="10" r="7" fill="none" stroke="currentColor"></circle>
      <path
        d="m16 15 3 3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}
