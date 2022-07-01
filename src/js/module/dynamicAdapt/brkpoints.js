const constRoot = require('../constants/root.js');
const BREAK_POINT_MD = constRoot.BREAK_POINT_MD;
const contactsHeaderWhatsapp = document.querySelector('.contacts-header__whatsapp');
const contactsHeaderWhatsappPrevText = contactsHeaderWhatsapp.textContent;
const contactsHeaderPhone = constRoot.contactsHeaderPhone;
const contactsHeaderPhoneList = constRoot.contactsHeaderPhoneList; 

// containers for phone menu
let contactsHeaderPhoneContainer;
let contactsHeaderPhoneTitle;
let contactsHeaderPhoneMenu;
let currentPhoneId;
if(window.innerWidth <= BREAK_POINT_MD) {
    // change the internal text for WhatsApp
    contactsHeaderWhatsapp.textContent = 'WhatsApp';
}
window.addEventListener('resize', () => {
    const isPhoneContainer = contactsHeaderPhone.querySelector('.contacts-header__phone-container'); 
    if(window.innerWidth <= BREAK_POINT_MD) {
        // change text for WhatsApp
        contactsHeaderWhatsapp.textContent = 'WhatsApp';
        if(!isPhoneContainer) {
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
                        contactsHeaderPhoneTitle.append(contactsHeaderPhoneList.children[0]);
                        currentPhoneId = contactsHeaderPhoneList.children[0].getAttribute('data-phone-id');
                    }
                    contactsHeaderPhoneMenu.append(contactsHeaderPhoneList.children[0]);
                }    
            }
            // insert phone menu
            contactsHeaderPhone.append(contactsHeaderPhoneContainer);
            contactsHeaderPhoneContainer.addEventListener('click', e => {
                const target = e.target;
                // show/close menu
                contactsHeaderPhoneContainer.classList.toggle('contacts-header__phone-container_active');
                // move the selected phone to the menu title and call the selected number
                const phoneItem = target.closest('.contacts-header__phone-item');
                if(phoneItem && target.closest('.contacts-header__phone-menu')) {
                    contactsHeaderPhoneTitle.append(phoneItem);
                    currentPhoneId = phoneItem.getAttribute('data-phone-id');
                    contactsHeaderPhoneMenu.append(contactsHeaderPhoneTitle.querySelector('.contacts-header__phone-item'));
                }
            });     
        }
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
        // move from menu
        if(isPhoneContainer) {
            while(contactsHeaderPhoneTitle.children.length > 0) {
                if(contactsHeaderPhoneTitle.children[0].hasAttribute('data-phone-id')) 
                   contactsHeaderPhoneList.append(contactsHeaderPhoneTitle.children[0]);
            }
            while(contactsHeaderPhoneMenu.children.length > 0) {
                if(contactsHeaderPhoneMenu.children[0].hasAttribute('data-phone-id')) 
                    contactsHeaderPhoneList.append(contactsHeaderPhoneMenu.children[0]);
            }             
        }
        contactsHeaderWhatsapp.textContent = contactsHeaderWhatsappPrevText;
    }
});