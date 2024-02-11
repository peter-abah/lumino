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
    <section className="px-5 md:px-8 lg:px-12 pb-12 md:pb-16 lg:pb-20 ">
      <div className="overflow-x-scroll no-scrollbar">
        <ul className="grid grid-cols-[repeat(3,72vw)] md:grid-cols-[repeat(3,36vw)] lg:grid-cols-[repeat(3,28vw)] gap-6 snap-x snap-mandatory">
          {cardInfoList.map((cardInfo) => (
            <li
              key={cardInfo.text}
              className="relative aspect-[9/10] rounded-md overflow-hidden snap-center snap-always"
            >
              <a
                href={cardInfo.link}
                className=" h-full text-white text-2xl md:text-[2rem] font-bold p-5 lg:p-12 flex flex-col justify-end"
              >
                <Image
                  src={cardInfo.imageLink}
                  alt=""
                  aria-hidden
                  fill
                  className="hover:scale-105 duration-[1.5s] ease-out"
                />
                <span className="z-10 relative leading-tight">{cardInfo.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
