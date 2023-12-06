const announcements = [
  "Free standard shipping on all orders",
  "A question? Visit our contact page to send us a message",
  "Discount: Use the code IMPACT20 to receive a 20% discount on your order",
  "New Collaboration: Master & Dynamic x Paris Saint-Germain",
];

export default function Announcements() {
  return (
    <section className="bg-black text-white px-4 ">
      <ul className="flex py-3.5 overflow-auto no-scrollbar">
        {announcements.map((announcement) => (
          <li
            key={announcement}
            className="whitespace-nowrap first-of-type:ml-auto last-of-type:mr-auto text-xs font-bold px-16 first-of-type:pl-0 last-of-type:pr-0 relative last-of-type:before:hidden before:absolute before:right-[-2px] before:top-0 before:bottom-0 before:my-auto before:rounded-full before:bg-white before:w-1 before:h-1"
          >
            {announcement}
          </li>
        ))}
      </ul>
    </section>
  );
}
