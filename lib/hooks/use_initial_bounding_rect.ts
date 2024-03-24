import { RefObject, useEffect, useState } from "react";

export default function useInitialBoundingRect<ElementType extends HTMLElement>(
  elementRef: RefObject<ElementType>
) {
  const [initialBoundingRect, setInitialBoundingRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    if (elementRef.current && !initialBoundingRect) {
      const boundingRect = elementRef.current.getBoundingClientRect();
      setInitialBoundingRect(boundingRect);
    }

    // Refs should not be added to useEffect dependency array since they are mutable but
    // do not rerender the component. Probably a bug from eslint.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialBoundingRect]);

  return initialBoundingRect;
}
