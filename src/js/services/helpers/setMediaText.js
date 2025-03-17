export function setMediaText(props) {
  const { matches, unmatchtext, matchtext, target } = props;
  target.textContent = matches ? matchtext : unmatchtext;
}
