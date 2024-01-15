export default function MarqueeText() {
  return (
    <section className="overflow-hidden pb-20 flex">
      <span className="marquee-text">Mastery is a never-ending exploration</span>
      <span className="marquee-text" aria-hidden>Mastery is a never-ending exploration</span>
    </section>
  );
}
