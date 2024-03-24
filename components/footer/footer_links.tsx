import { Menu, SanityArray } from "@/types/sanity";
import Link from "next/link";

type Props = {
  menus: SanityArray<Menu>;
};
export default function FooterLinks({ menus }: Props) {
  return (
    <div className="grid md:grid-cols-3 grid-cols-2 gap-24">
      {menus.map((menu) => (
        <div key={menu._key} className="last:mr-10 max-w-[250px] text-sm md:text-base">
          <p className="font-bold mb-3 md:mb-6">{menu.title}</p>

          <ul className="flex flex-col gap-3 last:mr-10">
            {menu.links.map((link) => (
              <li key={link._key}>
                <Link href={link.url} className="opacity-70 hover:opacity-100 transition-opacity">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
