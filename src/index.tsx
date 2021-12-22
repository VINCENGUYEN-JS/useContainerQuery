import React, { useState } from "react";
import { useResizeObserver } from "vince-nguyen-use-resize-observer";

type useContainerQuery = (
  node: Element | undefined,
  width: number,
  maxWidth?: number
) => boolean;

const useContainerQuery: useContainerQuery = (node, width = 1, maxWidth) => {
  if (maxWidth !== undefined && maxWidth < width) {
    throw new Error(
      `The second width value , ${maxWidth} , is not larger than ${width} . Please provide a value greater than the first width value`
    );
  }

  const [matches, setMatch] = useState(false);

  const callBack = (entry: ResizeObserverEntry) => {
    const nodeWidth =
      (entry.borderBoxSize as unknown as ResizeObserverSize)?.inlineSize ??
      entry.contentRect.width;

    if (nodeWidth > 0) {
      const newMatch =
        maxWidth === undefined
          ? nodeWidth <= width
          : nodeWidth >= width && nodeWidth <= maxWidth;

      setMatch(newMatch);
    }
  };

  useResizeObserver(node, callBack);

  return matches;
};

export default useContainerQuery;
