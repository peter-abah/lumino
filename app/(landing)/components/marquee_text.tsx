// Used for the marquee animation
const MARQUEE_TEXT_NO = 4;

// TODO: Not complete at all need to make animation functional, don't understand how to do it yet
export default function MarqueeText() {
  const createMarqueeText = () => {
    const res = [];
    for (let i = 0; i < MARQUEE_TEXT_NO; i++) {
      res.push(
        <p key={i} className="marquee-text">
          Mastery is a never-ending exploration
        </p>
      );
    }
    return res;
  };

  // TODO: Move arbitart values to tailwind
  return (
    <section className="relative overflow-hidden pb-20 h-[9rem] box-content">
      {createMarqueeText()}
    </section>
  );
}
