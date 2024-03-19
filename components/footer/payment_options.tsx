import { IconComponent } from "@/components/icons";

const CARD_ICONS_NAMES = [
  "visa-card",
  "mastercard",
  "amex-card",
  "paypal-card",
  "diners-card",
  "discover-card",
];
export default function PaymentOptions() {
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
