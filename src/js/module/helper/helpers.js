// general functions
// /**
//  * class switch for target element
//  * @param {string} parentClassName - parent element class name
//  * @param {string} targetClassName - the class name of the element on which the class switch is performed
//  * @param {string} toogleClassName - class name to switch
//  * @returns - undefined
//  */
//  function classToggle(parentClassName, targetClassName, toggleClassName) {
//     let parent;
//     let target;
//     if(!parent && !target) {
//         parent = document.querySelector(`.${parentClassName}`);
//         target = parent.querySelector(`.${targetClassName}`);
//     }
//     if(target) {
//         target.classList.toggle(`${toggleClassName}`);
//     }
// }
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
/**
 * returns the coordinates of the dom element in the context of the page 
 * @param {object} - the dom element for which the coordinates are calculated
 * @returns {object} - the coordinates of the dom element in the context of the page
 */
function getCoordsPageContext(elem) {
    const coords = elem.getBoundingClientRect();
    return {
        top: coords.top + window.pageYOffset,
        left: coords.left + window.pageXOffset,
        bottom: coords.bottom + window.pageYOffset,
        right: coords.right + window.pageXOffset,
    }
}
/**
 * placing an element below another element out of page context 
 * to apply a function more than once and correctly add/remove Eventlistener, 
 * use a closure and return of an anonymous function
 * @param {object} topElement - top dom-element
 * @param {object} bottomElement - top dom-element
 * @returns {function} - an anonymous function that aligns elements when launched
 */
const verticalAlign = (topElementClassName, bottomElementClassName) => {
    const topElement = document.querySelector(`.${topElementClassName}`);
    const bottomElement = document.querySelector(`.${bottomElementClassName}`);
    let {top} = getCoordsPageContext(bottomElement);
        return () => {
            const {bottom} = topElement.getBoundingClientRect();
            if(bottom != top) {
                bottomElement.style.top = bottom + 'px';
                // top position caching
                top = bottom
            } 
    }
}
/**
 * creating tooltip for dom element
 * @param {object} elem - the element for which the tooltip is set
 * @param {string} hintStyles - css style class for tooltip
 * @param {string} hintMessage - tooltip text
 * @param {object} correct - tooltip adjustment coordinates relative to the top left corner of the element
 * @returns {object} - tooltip - doem element with syles and desired coordinates
 */
function createHint(elem, hintStyles, hintMessage, correct) {
    let hint;
    // create hint
    hint = document.createElement('div');
    hint.classList.add(`${hintStyles}`);
    hint.textContent = hintMessage;
    // adjust tooltip coordinates relative to top left corner of element
    const correctX = correct.x ? correct.x : 0;
    const correctY = correct.y ? correct.y : 0;
    return () => {
        // get the current coordinates of an element
        elemCoords = getCoordsPageContext(elem);
        // set hint coordinates
        hint.style.top = elemCoords.top + correctY + 'px';
        hint.style.left = elemCoords.left + correctX + 'px';
        return hint;
    }
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
        if(prevHeight === currentHeight) return;
        elementB.style.paddingTop = currentHeight + 'px';
        prevHeight = currentHeight;
    }
}

/**
 * Reset style property on DOM element.
 * @param {string} className - target element class name.
 * @param {string} property - property name.
 * @returns {function} - anonymous function to reset a style property on a DOM element.
 */
 function resetStyleProperty(className, property) {
    const element = document.querySelector(`.${className}`);
    return function() {
        if(element.style[property]) element.style[property] = '';
    }
}

// module.exports.classToggle = classToggle;
module.exports.widthDiff = widthDiff;
module.exports.createHint = createHint;
module.exports.verticalAlign = verticalAlign;
module.exports.setPaddingBasedOnHeight = setPaddingBasedOnHeight;
module.exports.resetStyleProperty = resetStyleProperty;
// module.exports.getCoordsPageContext = getCoordsPageContext;