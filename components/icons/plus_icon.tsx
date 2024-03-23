import { IconProps } from ".";

export default function PlusIcon(props: IconProps) {
  return (
    <svg
      role="presentation"
      focusable="false"
      strokeWidth="2"
      width="8"
      height="8"
      viewBox="0 0 12 12"
      {...props}
    >
      <path d="M6 0V12" fill="none" stroke="currentColor"></path>
      <path d="M0 6L12 6" fill="none" stroke="currentColor"></path>
    </svg>
  );
}
