
const constRoot = require('../constants/root.js');
const BREAK_POINT_MD = constRoot.BREAK_POINT_MD;
const contactsHeaderWhatsapp = document.querySelector('.contacts-header__whatsapp');
const contactsHeaderWhatsappPrevText = contactsHeaderWhatsapp.textContent;
const contactsHeaderColumnPhone = document.querySelector('.contacts-header__column_phone');
// console.log(contactsHeaderColumnPhone);
// change the internal text for WhatsApp
if(window.innerWidth <= BREAK_POINT_MD) {
    contactsHeaderWhatsapp.textContent = 'WhatsApp';
}
window.addEventListener('resize', () => {
    if(window.innerWidth <= BREAK_POINT_MD) {
        // change text for WhatsApp
        contactsHeaderWhatsapp.textContent = 'WhatsApp';
        // adding container to change phone
        if(!contactsHeaderColumnPhone.querySelector('.contacts-header__phone-container')) {
            const contactsHeaderPhoneContainer = document.createElement('div');
            const contactsHeaderPhoneMenu = document.createElement('div');
            contactsHeaderPhoneMenu.classList.add('contacts-header__phone-menu');
            contactsHeaderPhoneContainer.classList.add('contacts-header__phone-container');
            const contactsAmount = contactsHeaderColumnPhone.children.length;
            // move childrens from contactsHeaderColumnPhone to contactsHeaderPhoneContainer and contactsHeaderPhoneMenu
            for(let i = 0; i < contactsAmount; i++) {
                if(i !== 0) {
                    contactsHeaderPhoneContainer.append(contactsHeaderColumnPhone.children[0]);
                } else {
                    contactsHeaderPhoneMenu.append(contactsHeaderColumnPhone.children[0]);
                } 
            }
            // insert phone menu
            contactsHeaderColumnPhone.append(contactsHeaderPhoneContainer);
            contactsHeaderColumnPhone.append(contactsHeaderPhoneMenu);
            contactsHeaderColumnPhone.addEventListener('click', e => {
                const target = e.target;
                // show/close menu
                contactsHeaderColumnPhone.classList.toggle('contacts-header__column_active');
                // move the selected phone to the container
                if(target.classList.contains('contacts-header__phone') && target.closest('.contacts-header__phone-container')) {
                    contactsHeaderPhoneMenu.append(target);
                    contactsHeaderPhoneContainer.append(contactsHeaderPhoneMenu.querySelector('.contacts-header__phone'));
                }
            });     
        }
    } else {
        contactsHeaderWhatsapp.textContent = contactsHeaderWhatsappPrevText;
    }
});