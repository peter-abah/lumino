import { client } from "@/sanity/lib/client";
import { Footer as SanityFooter, SocialLink } from "@/types/sanity";
import Copywright from "./copywright";
import FooterLinks from "./footer_links";
import NewsletterForm from "./newsletter_form";
import PaymentOptions from "./payment_options";
import Socials from "./socials";

async function getFooterData() {
  const sanityResult = await client.fetch<{
    footer: SanityFooter;
    socialLinks: SocialLink[];
  }>(`
    {
      'footer': *[_type == "footer"][0],
      'socialLinks': *[_type == "socialLinks"]
    }
  `);

  return sanityResult;
}

export default async function Footer() {
  const { footer, socialLinks } = await getFooterData();
  const { newsletter, copywright, menus } = footer;
  return (
    <footer className="py-12 px-5 lg:py-16 md:px-8 lg:px-12 bg-white">
      <div className="flex flex-col lg:flex-row gap-24 justify-between mb-10 md:mb-16">
        <NewsletterForm data={newsletter} />
        <FooterLinks menus={menus} />
      </div>

      <Socials links={socialLinks} />

      <div className="flex flex-col gap-8 md:flex-row justify-between items-start mt-10 md:mt-12">
        <PaymentOptions />
        <Copywright copywright={copywright} />
      </div>
    </footer>
  );
}
