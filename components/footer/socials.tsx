import { IconComponent } from "@/components/icons";
import { SocialLink } from "@/types/sanity";

type Props = {
  links: SocialLink[];
};
export default function Socials({ links }: Props) {
  return (
    <ul className="flex gap-6 items-center">
      {links.map((link) => (
        <li key={link._id}>
          <a href="#">
            <span className="sr-only">{link.name}</span>
            <IconComponent name={link.iconID} />
          </a>
        </li>
      ))}
    </ul>
  );
}
