export function callback(entries, data) {
  for (const entry of entries) {
    const { contentBoxSize } = entry;
    if (contentBoxSize) {
      if (contentBoxSize[0]) {
        const iterate = (bunch) => {
          const {
            text, divider, min, max,
          } = bunch;
          // To avoid infinite shrinking or growing of the element, we specify a min and max value.
          // See more here: https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver#observation_errors
          text.style.fontSize = `${Math.max(min, Math.min(max, entry.contentBoxSize[0].inlineSize / divider))}px`;
        };
        data.forEach(iterate);
      } else {
        // For older versions of Firefox.
        const iterate = (bunch) => {
          const { text, divider, min } = bunch;
          text.style.fontSize = `${Math.max(min, entry.contentBoxSize.inlineSize / divider)}px`;
        };
        data.forEach(iterate);
      }
    } else {
      const iterate = (bunch) => {
        const { text, divider, min } = bunch;
        text.style.fontSize = `${Math.max(min, entry.contentRect.width / divider)}px`;
      };
      data.forEach(iterate);
    }
  }
}
