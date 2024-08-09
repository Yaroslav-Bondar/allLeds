import { createElement } from './helpers/createElement.js';

/**
 * A dropdown menu based on the popover API, with import/export of menu items.
 */
export class Menu {
  static #itemsStore = new WeakMap();

  #ITEM_WRAPPER_TAGNAME = 'LI';

  #anchor;

  #container;

  constructor(css) {
    const {
      container: cssContainer,
      menu: cssMenu,
      button: cssButton,
      item: itemCss,
    } = css;

    this.#container = createElement(cssContainer);
    this._button = createElement({ ...cssButton, attrs: [{ popovertarget: cssMenu.id }] });
    this._menu = createElement({ ...cssMenu, attrs: [{ popover: '' }] });

    // Fallback for when the anchor positioning API
    // (https://developer.chrome.com/blog/anchor-positioning-api) is unsupported.
    if (!('anchorName' in document.documentElement.style)) {
      this._menu.ontoggle = ({ newState }) => this.#switchTrackMenuPosition(newState);
      const handleContainerIntersection = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!this.#anchor) {
              this.#anchor = document.getElementById(css.anchor?.id);
              if (this.#anchor === null) {
                throw new Error('There is not an anchor.');
              }
            }
            if (this._menu.matches(':popover-open')) {
              this.#switchTrackMenuPosition('open');
            }
          } else {
            this.#switchTrackMenuPosition('closed');
          }
        });
      };
      const containerIntersectionObserver = new IntersectionObserver(handleContainerIntersection);
      containerIntersectionObserver.observe(this.#container);
    }
    const menuObserver = new MutationObserver(
      (records) => this.#menuObserverCallback(records, itemCss),
    );
    menuObserver.observe(this._menu, { childList: true, subtree: true });
    this.#container.append(this._button, this._menu);
  }

  static #addToStore(items) {
    const add = (item) => {
      const addData = () => {
        const { parentElement: parent } = item;
        if (!parent) {
          throw new Error('There is not a parent element');
        }
        Menu.#itemsStore.set(item, {
          parent,
          sibling: item.nextElementSibling,
          styles: item.style.cssText,
        });
      };

      if (!Menu.#itemsStore.has(item)) {
        addData();
      }
    };
    items.forEach(add);
  }

  static isInStore(item) { return Menu.#itemsStore.has(item); }

  static extractItems(source, filterWrapper, filterItem) {
    const result = [];
    const wrappers = source.filter(filterWrapper);
    wrappers.forEach((wrapper) => {
      const items = [...wrapper.children].filter(filterItem);
      result.push(...items);
    });
    return result;
  }

  #menuObserverCallback(records, itemCss) {
    const iterate = (record) => {
      if (record.type === 'childList') {
        const { target } = record;
        // Clear the menu and store set the initial styles for the menu items.
        if (target.tagName === this.#ITEM_WRAPPER_TAGNAME) {
          const removedItems = [...record.removedNodes].filter(Menu.isInStore);
          if (removedItems.length > 0) {
            removedItems.forEach((node) => {
              const { parentElement, nextElementSibling } = node;
              const { parent, sibling, styles } = Menu.#itemsStore.get(node);
              if ((parentElement === parent)
                  || ((nextElementSibling === sibling)
                  && (sibling !== null && nextElementSibling !== null))
              ) {
                node.setAttribute('style', styles);
                Menu.#itemsStore.delete(node);
              }
            });
            target.remove();
          }
        }
        // Set menu item styles
        Menu.extractItems(
          [...record.addedNodes],
          (node) => node.tagName === this.#ITEM_WRAPPER_TAGNAME,
          Menu.isInStore,
        )
          .forEach((item) => {
            item.setAttribute('style', itemCss);
          });
      }
    };
    records.forEach(iterate);
  }

  /**
   * Fallback for when the anchor positioning API
   * (https://developer.chrome.com/blog/anchor-positioning-api)
   * is unsupported.
   */
  #setMenuPosition = () => {
    const anchorCoords = this.#anchor.getBoundingClientRect();
    const gap = 5;
    this._menu.style.top = `${anchorCoords.top}px`;
    this._menu.style.left = `${anchorCoords.left - this._menu.offsetWidth - gap}px`;
  };

  #switchTrackMenuPosition(newState) {
    if (newState === 'open') {
      this.#setMenuPosition();
      window.addEventListener('resize', this.#setMenuPosition);
    } else if (newState === 'closed') {
      window.removeEventListener('resize', this.#setMenuPosition);
    }
  }

  #addToMenu(items) {
    const wrap = (item) => {
      const wrapper = createElement({ tag: this.#ITEM_WRAPPER_TAGNAME });
      wrapper.append(item);
      return wrapper;
    };
    items.forEach(((item) => this._menu.append(wrap(item))));
  }

  get _items() {
    return Menu.extractItems(
      [...this._menu.children],
      (node) => node.tagName === this.#ITEM_WRAPPER_TAGNAME,
      Menu.isInStore,
    );
  }

  export() {
    const addBack = (item) => {
      const { sibling } = Menu.#itemsStore.get(item);
      if (sibling) {
        if (!sibling.isConnected) {
          throw new Error('The element is not connected to the DOM');
        }
        sibling.before(item);
        return;
      }
      const { parent } = Menu.#itemsStore.get(item);
      if (!parent) {
        throw new Error('There is not a parent element');
      }
      if (!parent.isConnected) {
        throw new Error('The element is not connected to the DOM');
      }
      parent.append(item);
    };
    this._items.forEach(addBack);
  }

  import(targetCssClass) {
    if (this._menu.children.length) {
      throw Error('The menu is not empty.');
    }
    const items = document.getElementsByClassName(targetCssClass);
    Menu.#addToStore([...items]);
    this.#addToMenu([...items]);
  }

  render(selector) {
    const destination = document.querySelector(`${selector}`);
    if (!destination) {
      throw new Error('No destination');
    }
    destination.append(this.#container);
  }

  show() {
    this.#container.style.display = 'block';
  }

  hide() {
    this.#container.style.display = 'none';
  }
}
