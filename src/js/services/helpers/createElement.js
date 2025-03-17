/**
 * Creates the HTML element specified by tagName,
 * or an HTMLUnknownElement if tagName isn't recognized.
 * The method uses document.createElement (https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement).
 * It is a bit shorter and more convenient, especially if you need to pass many parameters.
 * @param {Object} props - Creations options.
 * @param {string} [props.tag=div] - Tagname.
 * @param {string} [props.id] - Element ID.
 * @param {string[]} [props.classes] - CSS class names.
 * @param {Object[]} props.attrs - Attribute names and values.
 * @param {string} props.attrs[].name - Attribute name.
 * @param {string} props.attrs[].value - Attribute value.
 * @returns {(Element|HTMLElement|HTMLUnknownElement)} The new Element (https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement#return_value).
 * @example
 * // returns HTMLDivElement (https://developer.mozilla.org/en-US/docs/Web/API/HTMLDivElement)
 * // with the class name title-menu
 * // <div class="title-menu"></div>
 * createElement({ classes: ['title-menu'] });
 * @example
 * // returns HTMLButtonElement (https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement)
 * // with the class names title-menu and menu and id: btn.
 * // <button id="btn" class="title-menu menu"></button>
 * createElement({ tag: 'button', classes: ['title-menu', menu], id: 'btn' });
 */
export const createElement = ({ tag, id, classes, attrs }) => {
  const element = document.createElement(tag || 'div');
  if (id?.length) {
    element.id = id;
  }
  if (classes) {
    element.classList.add(...classes);
  }
  if (attrs?.length) {
    const setAttrs = (obj) => {
      const keys = Object.keys(obj);
      if (keys.length !== 1) {
        throw new Error('Then number of keys must be equal to one');
      }
      const [key] = keys;
      element.setAttribute(key, obj[key]);
    };
    attrs.forEach(setAttrs);
  }
  return element;
};
