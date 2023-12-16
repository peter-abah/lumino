import { IconComponent } from "@/app/components/icons";

const BENEFITS = [
  {
    heading: "Designed in NYC",
    text: "Products designed and developed in New York City.",
    iconName: "location",
  },
  {
    heading: "Free Shipping",
    text: "Free worldwide shipping on all orders of $99",
    iconName: "globe",
  },
  { heading: "Support", text: "Our support team is available 24/7", iconName: "support" },
  { heading: "Secure Payment", text: "All payments are processed securely", iconName: "payments" },
];

export default function AdditionalBenefits() {
  return (
    <section className="grid grid-cols-4 gap-6 px-12 pb-20">
      {BENEFITS.map((benefit) => (
        <Benefit key={benefit.heading} benefit={benefit} />
      ))}
    </section>
  );
}

type BenefitProps = {
  benefit: (typeof BENEFITS)[0];
};
function Benefit({ benefit }: BenefitProps) {
  return (
    <div>
      <IconComponent name={benefit.iconName} />
      <h3 className="mt-6 mb-4 text-lg font-bold">{benefit.heading}</h3>
      <p>{benefit.text}</p>
    </div>
  );
}
