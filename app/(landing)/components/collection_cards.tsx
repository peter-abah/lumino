import Image from "next/image";

const cardInfoList = [
  {
    text: "Lightweight luxury earphones",
    link: "#",
    imageLink: "/images/collection-earphones.jpg",
  },
  {
    text: "Upgrade your listening experience",
    link: "#",
    imageLink: "/images/collection-headphones.jpg",
  },
  {
    text: "Discover exclusive collaborations",
    link: "#",
    imageLink: "/images/collection-collaborations.jpg",
  },
];

// TODO: Show arrow on hover
export default function CollectionCards() {
  return (
    <section className="px-12 pb-20">
      <ul className="grid grid-cols-3 gap-6">
        {cardInfoList.map((cardInfo) => (
          <li key={cardInfo.text} className="relative aspect-[9/10] rounded-md overflow-hidden">
            <a href={cardInfo.link} className=" h-full text-white text-[2rem] font-bold px-12 pb-14 flex flex-col justify-end">
              <Image
                src={cardInfo.imageLink}
                alt=""
                aria-hidden
                fill
                className="hover:scale-105 duration-[1.5s] ease-out"
              />
              <span className="z-10 relative">{cardInfo.text}</span>
              
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
