/**
 * return the width difference  betwen two elements
 * @param {object} elemA - the element from which the width is subtracted
 * @param {object} elemB - element whose width is subtracted
 * @returns {string} - width difference  betwen two elements in the format: '124px';
 */
function getWidthDifference(elemA, elemB) {
  const elemACoord = elemA.getBoundingClientRect();
  const elemBCoord = elemB.getBoundingClientRect();
  const diff = `${elemACoord.right - elemBCoord.left}px`;
  return diff;
}

/**
 * setting padding on element B which is based on the height of element A
 * example of use:
 * const setMobileMenuPadding = setPaddingBasedOnHeight();
 * setMobileMenuPadding(elementA, elementB);
 * @returns {function} - an anonymous function that takes element
 *                       A and element B as arguments and
 *                       adjusts element B's padding to match the height of element A
 */
const setPaddingBasedOnHeight = () => {
  let prevHeight;
  return (elementA, elementB) => {
    const currentHeight = elementA.offsetHeight;
    const elemB = elementB;
    if (prevHeight === currentHeight) return;
    elemB.style.paddingTop = `${currentHeight}px`;
    prevHeight = currentHeight;
  };
};

export {
  getWidthDifference,
  setPaddingBasedOnHeight,
};
