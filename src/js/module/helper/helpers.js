// general functions
/**
 * class switch for target element
 * @param {string} parentClassName - parent element class name
 * @param {string} targetClassName - the class name of the element on which the class switch is performed
 * @param {string} toogleClassName - class name to switch
 * @returns - undefined
 */
 function classToggle(parentClassName, targetClassName, toggleClassName) {
    const parent = document.querySelector(`.${parentClassName}`);
    const target = parent.querySelector(`.${targetClassName}`);
    if(target) {
        target.classList.toggle(`${toggleClassName}`);
    }
}
/**
 * return the width difference  betwen two elements 
 * @param {object} elemA - the element from which the width is subtracted
 * @param {object} elemB - element whose width is subtracted
 * @returns {string} - width difference  betwen two elements in the format: '124px';
 */
function widthDiff(elemA, elemB) {
    const elemACoord = elemA.getBoundingClientRect();
    const elemBCoord = elemB.getBoundingClientRect();
    const diff = elemACoord.right - elemBCoord.left + 'px';
    return diff;
}
module.exports.classToggle = classToggle;
module.exports.widthDiff = widthDiff;