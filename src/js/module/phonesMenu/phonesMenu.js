const {BREAK_POINT_MD,
        isBreakPointMd,
        contactsHeaderPhone,
        contactsHeaderPhoneList} = require('../constants/root.js');

const contactsHeaderWhatsapp = document.querySelector('.contacts-header__whatsapp');
const contactsHeaderWhatsappPrevText = contactsHeaderWhatsapp.textContent;

// containers for phone menu
let contactsHeaderPhoneContainer;
let contactsHeaderPhoneTitle;
let contactsHeaderPhoneMenu;

let isPhoneMenu;
let currentPhoneId = 0;

// isBreakPointMd = matchMedia(`(max-width:${BREAK_POINT_MD}px)`);
// load/reload page
if(isBreakPointMd.matches) {
    createPhoneMenu();
    // change the internal text for WhatsApp
    contactsHeaderWhatsapp.textContent = 'WhatsApp';
}
isBreakPointMd.addEventListener('change', setContacts);

function setContacts(e) {
    if(e.matches) {
        // change text for WhatsApp
        contactsHeaderWhatsapp.textContent = 'WhatsApp';
        if(!isPhoneMenu) createPhoneMenu();
        if(contactsHeaderPhoneList.children.length > 0) {
            // move phones to menu    
            while(contactsHeaderPhoneList.children.length > 0) {
                if(contactsHeaderPhoneList.children[0].hasAttribute('data-phone-id')) {
                    if(contactsHeaderPhoneList.children[0].getAttribute('data-phone-id') == currentPhoneId) {
                        contactsHeaderPhoneTitle.append(contactsHeaderPhoneList.children[0]);
                    } else {
                        contactsHeaderPhoneMenu.append(contactsHeaderPhoneList.children[0]);
                    }
                }
            }
        }
    } else {
        if(isPhoneMenu) {
            // move from title
            while(contactsHeaderPhoneTitle.children.length > 0) {
                if(contactsHeaderPhoneTitle.children[0].hasAttribute('data-phone-id')) 
                   contactsHeaderPhoneList.append(contactsHeaderPhoneTitle.children[0]);
            }
            // move from menu
            while(contactsHeaderPhoneMenu.children.length > 0) {
                if(contactsHeaderPhoneMenu.children[0].hasAttribute('data-phone-id')) 
                    contactsHeaderPhoneList.append(contactsHeaderPhoneMenu.children[0]);
            }             
        }
        contactsHeaderWhatsapp.textContent = contactsHeaderWhatsappPrevText;
    }
}

function createPhoneMenu() {
    // creating containers for phone numbers
    // container for drop-down menu
    contactsHeaderPhoneContainer = document.createElement('div');
    // container for selected or current number
    contactsHeaderPhoneTitle = document.createElement('ul');
    // phone number menu container
    contactsHeaderPhoneMenu = document.createElement('ul');
    contactsHeaderPhoneMenu.classList.add('contacts-header__phone-menu', 'contacts-header__phone-menu_over');
    contactsHeaderPhoneContainer.classList.add('contacts-header__phone-container');
    contactsHeaderPhoneTitle.classList.add('contacts-header__phone-title');
    contactsHeaderPhoneContainer.append(contactsHeaderPhoneTitle, contactsHeaderPhoneMenu);
    // move phones to menu    
    while(contactsHeaderPhoneList.children.length > 0) {
        if(contactsHeaderPhoneList.children[0].hasAttribute('data-phone-id')) {
            if(contactsHeaderPhoneList.children[0].getAttribute('data-phone-id') == 0) {
                currentPhoneId = contactsHeaderPhoneList.children[0].getAttribute('data-phone-id');
                contactsHeaderPhoneTitle.append(contactsHeaderPhoneList.children[0]);
            }
            contactsHeaderPhoneMenu.append(contactsHeaderPhoneList.children[0]);
        }    
    }
    // insert phone menu
    contactsHeaderPhone.append(contactsHeaderPhoneContainer);
    // select phone number (add handler);
    contactsHeaderPhoneContainer.addEventListener('click', contactSelection)
    isPhoneMenu = true; 
}
function contactSelection(e) {
    const target = e.target;
    // show/close menu
    contactsHeaderPhoneContainer.classList.toggle('contacts-header__phone-container_active');
    // move the selected phone to the menu title and call the selected number
    const phoneItem = target.closest('.contacts-header__phone-item');
    if(phoneItem && target.closest('.contacts-header__phone-menu')) {
        // move selected phone to the menu
        contactsHeaderPhoneTitle.append(phoneItem);
        currentPhoneId = phoneItem.getAttribute('data-phone-id');
        // move currently selected phone number to menu from title 
        contactsHeaderPhoneMenu.append(contactsHeaderPhoneTitle.querySelector('.contacts-header__phone-item'));
    }
};