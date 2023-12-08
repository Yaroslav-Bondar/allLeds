import {
  mediaMaxWidth768,
  contactsHeaderPhone,
  contactsHeaderPhoneList,
} from '../../common/constants/index.js';

const contactsHeaderWhatsapp = document.querySelector('.contacts-header__whatsapp');
const WHATSAPP_DESKTOP_TEXT = contactsHeaderWhatsapp.textContent;
const WHATSAPP_MOBILE_TEXT = 'WhatsApp';
const PHONE_ID_ATTRIBUTE = 'data-phone-id';
// containers for phone menu
let contactsHeaderPhoneContainer;
let contactsHeaderPhoneTitle;
let contactsHeaderPhoneMenu;
let selectedPhoneId = 0;

const isPhoneMenu = () => contactsHeaderPhoneTitle && contactsHeaderPhoneMenu;

function selectContact(event) {
  const { target } = event;
  // show/close menu
  contactsHeaderPhoneContainer.classList.toggle('contacts-header__phone-container_active');
  // move the selected phone to the menu title and call the selected number
  const phoneItem = target.closest('.contacts-header__phone-item');
  if (phoneItem && target.closest('.contacts-header__phone-menu')) {
    // move selected phone to the menu
    contactsHeaderPhoneTitle.append(phoneItem);
    selectedPhoneId = phoneItem.getAttribute(PHONE_ID_ATTRIBUTE);
    // move currently selected phone number to menu from title
    contactsHeaderPhoneMenu.append(contactsHeaderPhoneTitle.querySelector('.contacts-header__phone-item'));
  }
}

/**
 * Creating containers for phone numbers
*/
function createPhoneMenu() {
  // container for drop-down menu
  contactsHeaderPhoneContainer = document.createElement('div');
  contactsHeaderPhoneContainer.classList.add('contacts-header__phone-container');
  // container for selected or current number
  contactsHeaderPhoneTitle = document.createElement('ul');
  contactsHeaderPhoneTitle.classList.add('contacts-header__phone-title');

  contactsHeaderPhoneMenu = document.createElement('ul');
  contactsHeaderPhoneMenu.classList.add('contacts-header__phone-menu', 'contacts-header__phone-menu_z-index_12');

  contactsHeaderPhoneContainer.append(contactsHeaderPhoneTitle, contactsHeaderPhoneMenu);
  // move phones to menu
  while (contactsHeaderPhoneList.children.length > 0) {
    const phone = contactsHeaderPhoneList.children[0];
    const id = phone.getAttribute(PHONE_ID_ATTRIBUTE);
    if (id === '0') {
      selectedPhoneId = id;
      contactsHeaderPhoneTitle.append(phone);
    } else if (id) {
      contactsHeaderPhoneMenu.append(phone);
    }
  }
  contactsHeaderPhone.append(contactsHeaderPhoneContainer);
  contactsHeaderPhoneContainer.addEventListener('click', selectContact);
}

function setContacts(event) {
  if (event.matches) {
    contactsHeaderWhatsapp.textContent = WHATSAPP_MOBILE_TEXT;
    if (contactsHeaderPhoneList.children.length < 2) return;
    if (!isPhoneMenu()) createPhoneMenu();
    // move phones to menu
    while (contactsHeaderPhoneList.children.length > 0) {
      const phone = contactsHeaderPhoneList.children[0];
      const id = phone.getAttribute(PHONE_ID_ATTRIBUTE);
      if (id === selectedPhoneId) {
        contactsHeaderPhoneTitle.append(phone);
      } else if (id) {
        contactsHeaderPhoneMenu.append(phone);
      }
    }
  } else {
    contactsHeaderWhatsapp.textContent = WHATSAPP_DESKTOP_TEXT;
    // move from title
    while (contactsHeaderPhoneTitle?.children.length > 0) {
      const phone = contactsHeaderPhoneTitle.children[0];
      if (phone.hasAttribute(PHONE_ID_ATTRIBUTE)) {
        contactsHeaderPhoneList.append(phone);
      }
    }
    // move from menu
    while (contactsHeaderPhoneMenu?.children.length > 0) {
      const phone = contactsHeaderPhoneMenu.children[0];
      if (phone.hasAttribute(PHONE_ID_ATTRIBUTE)) {
        contactsHeaderPhoneList.append(phone);
      }
    }
  }
}

// load/reload page
if (mediaMaxWidth768.matches) {
  contactsHeaderWhatsapp.textContent = WHATSAPP_MOBILE_TEXT;
  if (contactsHeaderPhoneList.children.length >= 2) {
    createPhoneMenu();
  }
}

export { setContacts as default };
