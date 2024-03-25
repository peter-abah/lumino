type Props = {
  scrollingText: string;
};
export default function MarqueeText({ scrollingText }: Props) {
  return (
    <section className="overflow-hidden pb-12 md:pb-16 lg:pb-20 flex">
      <span className="marquee-text">{scrollingText}</span>
      <span className="marquee-text" aria-hidden>
        {scrollingText}
      </span>
    </section>
  );
}
