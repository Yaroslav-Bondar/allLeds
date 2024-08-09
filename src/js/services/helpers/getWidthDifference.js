/**
 * return the width difference  betwen two elements
 * @param {object} elemA - the element from which the width is subtracted
 * @param {object} elemB - element whose width is subtracted
 * @returns {string} - width difference  betwen two elements in the format: '124px';
 */
export function getWidthDifference(elemA, elemB) {
  const elemACoord = elemA.getBoundingClientRect();
  const elemBCoord = elemB.getBoundingClientRect();
  const diff = `${elemACoord.right - elemBCoord.left}px`;
  return diff;
}
