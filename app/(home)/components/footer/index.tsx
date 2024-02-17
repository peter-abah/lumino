import { IconComponent } from "@/components/icons";
import ArrowRight from "@/components/icons/arrow_right_icon";
import { HomePage, Menu, Newsletter, SanityArray, SocialLink } from "@/types/sanity";
import Link from "next/link";
import Copywright from "./copywright";

type Props = {
  footer: HomePage["footer"];
  socialLinks: SocialLink[];
};
export default function Footer({ footer, socialLinks }: Props) {
  const { newsletter, copywright, menus } = footer;
  return (
    <footer className="py-12 px-5 lg:py-16 lg:px-12 bg-white">
      <div className="flex flex-col lg:flex-row gap-10 md:gap-24 justify-between mb-10 md:mb-24">
        <NewsletterForm data={newsletter} />
        <Links menus={menus} />
      </div>
      <Socials links={socialLinks} />
      <div className="flex flex-col gap-8 md:flex-row justify-between items-start mt-10 md:mt-12">
        <PaymentOptions />
        <Copywright copywright={copywright} />
      </div>
    </footer>
  );
}

type NewsletterFormProps = {
  data: Newsletter;
};
function NewsletterForm({ data }: NewsletterFormProps) {
  return (
    <div className="basis-1/3">
      <span aria-hidden className="font-black tracking-wide text-3xl h-5 uppercase leading-none">
        LUMINO
      </span>
      <p className="text-2xl md:text-4xl font-bold mb-6 mt-8 leading-tight">{data.title}</p>
      <form action="#" method="POST" className="relative">
        <label htmlFor="newsletter-email" className="sr-only">
          Enter email
        </label>
        <input
          type="email"
          name="email"
          id="newsletter-email"
          placeholder="E-mail"
          className="w-full py-4 px-5 rounded-lg border placeholder:text-sm md:placeholder:text-base placeholder:text-text/50"
        />
        <button
          type="submit"
          className="absolute top-4 right-5 rounded-full w-6 aspect-square bg-text/10 grid place-items-center hover:bg-text hover:text-white"
        >
          <ArrowRight className="w-[5px]" />
          <span className="sr-only">Submit</span>
        </button>
      </form>
    </div>
  );
}

type LinksProps = {
  menus: SanityArray<Menu>;
};
function Links({ menus }: LinksProps) {
  return (
    <div className="grid grid-cols-2 gap-10">
      {menus.map((menu) => (
        <div key={menu._key} className="last:mr-10 max-w-[250px] text-sm md:text-base">
          <p className="font-bold mb-3 md:mb-6">{menu.title}</p>

          <ul className="flex flex-col gap-3">
            {menu.links.map((link) => (
              <li key={link._key}>
                <Link href={link.url} className="opacity-70">
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

// const SOCIALS = [
//   { name: "Follow on Facebook", link: "#", iconName: "facebook" },
//   { name: "Follow on Twitter", link: "#", iconName: "twitter" },
//   { name: "Follow on Instagram", link: "#", iconName: "instagram" },
//   { name: "Follow on Youtube", link: "#", iconName: "youtube" },
//   { name: "Follow on Spotify", link: "#", iconName: "spotify" },
// ];
type SocialsProps = {
  links: SocialLink[];
};
function Socials({ links }: SocialsProps) {
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

const CARD_ICONS_NAMES = [
  "visa-card",
  "mastercard",
  "amex-card",
  "paypal-card",
  "diners-card",
  "discover-card",
];
function PaymentOptions() {
  return (
    <div>
      <ul className="flex gap-2 items-center">
        {CARD_ICONS_NAMES.map((iconName) => (
          <IconComponent name={iconName} key={iconName} />
        ))}
      </ul>
    </div>
  );
}
