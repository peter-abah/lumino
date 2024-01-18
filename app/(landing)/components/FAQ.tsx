import Accordion from "@/app/components/accordion";
import Image from "next/image";

const ACCORDION_ITEMS = [
  {
    heading: "Do you ship overseas?",
    text: "Yes, we ship all over the world. Shipping costs will apply, and will be added at checkout. We run discounts and promotions all year, so stay tuned for exclusive deals.",
  },
  {
    heading: "Do I need to setup an account to place an order?",
    text: "You do not need to set up an account to place an order. However creating an account allows you to store your shipping information, see order history, and view your product’s warranty information. Additional features will be added to the account page in the near future.",
  },
  {
    heading: "Do you offer gift wrapping",
    text: "Yes, we can wrap your item in our signature box with tissue paper, and include a card with your personal message. The option is available during checkout for an additional $5. Please note this service is not available for wireless speaker purchases.",
  },
  {
    heading: "What is your return policy?",
    text: "All products purchased from our website may be returned within 14 days of purchase for a full refund less shipping costs, no questions asked. International return orders may be subject to return shipping fees. To initiate such a return please contact us.",
  },
  {
    heading: "How long will it take to get my orders?",
    text: "It depends on where you are. Orders processed here will take 5-7 business days to arrive. Overseas deliveries can take anywhere from 7-16 days. Delivery details will be provided in your confirmation email.",
  },
  {
    heading: "Any question?",
    text: "You can contact us through our contact page! We will be happy to assist you.",
  },
];

export default function FAQ() {
  return (
    <section className="px-5 py-12 md:p-16 md:mx-8 lg:mx-12 md:mb-16 lg:mb-20 rounded-none md:rounded-3xl bg-white flex flex-col lg:flex-row gap-12">
      <div className="lg:w-1/2 flex flex-col gap-10">
        <div>
          <h2 className="text-[2rem] md:text-[2.5rem] leading-heading mb-8 font-bold">
            Have a question ? We are here to help.
          </h2>
          <p className="text-sm md:text-base leading-normal">
            Check out the most common questions our customers asked. Still have questions? Contact
            our customer support.
          </p>
        </div>

        <div className="hidden lg:block">
          <Image src="/images/customer-support.png" alt="" width={160} height={44} />
          <p className="mt-4">Our customer support is available monday to friday: 8am-8:30pm.</p>
          <p className="text-text/70">Average answer time: 24h</p>
        </div>
      </div>

      <div className="lg:w-1/2">
        <Accordion items={ACCORDION_ITEMS} />
      </div>

      <div className="lg:hidden flex flex-col items-center text-center lg:text-left text-sm md:text-base">
        <Image src="/images/customer-support.png" alt="" width={160} height={44} />
        <p className="mt-4">Our customer support is available monday to friday: 8am-8:30pm.</p>
        <p className="text-text/70">Average answer time: 24h</p>
      </div>
    </section>
  );
}
