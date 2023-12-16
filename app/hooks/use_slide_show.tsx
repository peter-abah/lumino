import { useMemo, useState } from "react";

type Options = {
  wrapAround?: boolean;
};
export default function useSlideShow(length: number, options: Options = {}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { wrapAround = true } = options;

  const canGoToPrev = useMemo(() => currentIndex - 1 >= 0, [currentIndex]);
  const canGoToNext = useMemo(() => currentIndex + 1 < length, [currentIndex, length]);

  const goToNext = () => {
    if (wrapAround) {
      setCurrentIndex((prevState) => (prevState + 1) % length);
    } else if (canGoToNext) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const goToPrev = () => {
    if (wrapAround) {
      setCurrentIndex((prevState) => (prevState === 0 ? length - 1 : prevState - 1));
    } else if (canGoToPrev) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  return { currentIndex, setCurrentIndex, goToNext, goToPrev };
}
