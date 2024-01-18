import { IconComponent } from "@/app/components/icons";
import ArrowRight from "@/app/components/icons/arrow_right_icon";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 px-5 lg:py-16 lg:px-12 bg-white">
      <div className="flex flex-col lg:flex-row gap-10 md:gap-24 justify-between mb-10 md:mb-24">
        <Newsletter />
        <Links />
      </div>
      <Socials />
      <div className="flex flex-col gap-8 md:flex-row justify-between items-start mt-10 md:mt-12">
        <PaymentOptions />
        <Copywright />
      </div>
    </footer>
  );
}

function Newsletter() {
  return (
    <div className="basis-1/3">
      <span aria-hidden className="font-black tracking-wide text-3xl h-5 uppercase leading-none">
        LUMINO
      </span>
      <p className="text-2xl md:text-4xl font-bold mb-6 mt-8 leading-tight">
        Sign up for news, updates & 10% off your first order.
      </p>
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

const LINKS = [
  {
    heading: "Shop",
    links: [
      { name: "Headphones", link: "#" },
      { name: "Earphones", link: "#" },
      { name: "Speakers", link: "#" },
      { name: "Accesories", link: "#" },
    ],
  },
  {
    heading: "Collaborations",
    links: [
      { name: "Leica 0.95", link: "#" },
      { name: "Paris Saint-Germain", link: "#" },
      { name: "Automobili Lamborghini", link: "#" },
      { name: "View all", link: "#" },
    ],
  },
  {
    heading: "About",
    links: [
      { name: "Story", link: "#" },
      { name: "FAQ", link: "#" },
      { name: "Contact", link: "#" },
    ],
  },
];
function Links() {
  return (
    <div className="grid grid-cols-2 gap-10">
      {LINKS.map((linkCategory) => (
        <div key={linkCategory.heading} className="last:mr-10 max-w-[250px] text-sm md:text-base">
          <p className="font-bold mb-3 md:mb-6">{linkCategory.heading}</p>

          <ul className="flex flex-col gap-3">
            {linkCategory.links.map((link) => (
              <li key={link.name}>
                <Link href={link.link} className="opacity-70">
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

const SOCIALS = [
  { name: "Follow on Facebook", link: "#", iconName: "facebook" },
  { name: "Follow on Twitter", link: "#", iconName: "twitter" },
  { name: "Follow on Instagram", link: "#", iconName: "instagram" },
  { name: "Follow on Youtube", link: "#", iconName: "youtube" },
  { name: "Follow on Spotify", link: "#", iconName: "spotify" },
];
function Socials() {
  return (
    <ul className="flex gap-6 items-center">
      {SOCIALS.map((social) => (
        <li key={social.name}>
          <a href="#">
            <span className="sr-only">{social.name}</span>
            <IconComponent name={social.iconName} />
          </a>
        </li>
      ))}
    </ul>
  );
}

function Copywright() {
  return (
    <div className="text-sm text-text/70 max-w-sm md:-order-1">
      <p className="mb-1">
        Made by{" "}
        <a href="https://github.com/peter-abah" className="text-text hover:underline">
          Peter Abah
        </a>
      </p>
      <p>
        Design and all assets belong to{" "}
        <a href="https://maestrooo.com/" className="text-text hover:underline">
          Maestroo
        </a>{" "}
        and were gotten from{" "}
        <a
          href="https://themes.shopify.com/themes/impact/styles/sound"
          className="text-text hover:underline"
        >
          Impact Theme Sound
        </a>
        . I claim no ownership.
      </p>
    </div>
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
