import { IconProps } from ".";

export default function Globe(props: IconProps) {
  return (
    <svg
      role="presentation"
      fill="none"
      focusable="false"
      strokeWidth="2"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M12 22.621c5.866 0 10.621-4.755 10.621-10.621 0-5.866-4.755-10.621-10.621-10.621C6.134 1.379 1.379 6.134 1.379 12c0 5.866 4.755 10.621 10.621 10.621Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M5.055 16.085a2.86 2.86 0 0 0 2.86-2.86v-2.45a2.86 2.86 0 0 1 2.86-2.86 2.86 2.86 0 0 0 2.859-2.86V1.504A10.702 10.702 0 0 0 12 1.379C6.134 1.379 1.379 6.134 1.379 12c0 1.448.29 2.828.814 4.085h2.862ZM22.62 11.836a5.817 5.817 0 0 0-2.646-.653h-3.48a2.86 2.86 0 0 0 0 5.719 2.042 2.042 0 0 1 2.042 2.043v1.421h.008a10.602 10.602 0 0 0 4.077-8.303v-.126l-.001-.1Z"
        fill="currentColor"
        fillOpacity=".12"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}
