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
module.exports.classToggle = classToggle;