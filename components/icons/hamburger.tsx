import { IconProps } from ".";

export default function Hamburger(props: IconProps) {
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
      <path d="M1 5h20M1 11h20M1 17h20" stroke="currentColor" strokeLinecap="round"></path>
    </svg>
  );
}
