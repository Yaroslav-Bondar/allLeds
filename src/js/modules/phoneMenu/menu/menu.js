import { Menu } from '../../../services/index.js';

/**
 * * A dropdown menu based on the popover API, with import/export of menu items.
 * It can pick up the text content of the selected menu item and insert it into the menu title.
 */
export class TitleMenu extends Menu {
  #selectedKey = Symbol('selected');

  constructor(css) {
    super(css);
    this._menu.addEventListener('click', this.#select.bind(this));
  }

  get #selected() {
    const selected = this._items.filter((item) => item[this.#selectedKey] === true);
    const { length } = selected;
    if (length > 1) {
      throw new Error('There is more than one title, it must be one.');
    }
    if (length === 0) {
      return undefined;
    }
    return selected[0];
  }

  #select(event) {
    const { target } = event;
    if (!TitleMenu.isInStore(target)) {
      return;
    }
    if (target[this.#selectedKey] === true) {
      target.click();
      return;
    }
    delete this.#selected[this.#selectedKey];
    target[this.#selectedKey] = true;
    this._button.textContent = target.textContent;
    target.click();
  }

  #setTitle() {
    if (this.#selected !== undefined) {
      this._button.textContent = this.#selected.textContent;
      return;
    }
    const randomIndex = Math.round(Math.random() * (this._items.length - 1));
    const item = this._items[randomIndex];
    item[this.#selectedKey] = true;
    this._button.textContent = item.textContent;
  }

  import(targetCssClass) {
    super.import(targetCssClass);
    this.#setTitle();
  }
}
