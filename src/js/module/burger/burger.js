const burgerLine = document.querySelector('.burger__line');
const catalogBtn = document.querySelector('.catalog__btn');
const btnMenuBtn = document.querySelector('.btn-menu__btn');
const btnMenuTextClose = document.querySelector('.btn-menu__text-close');
const btnMenuTextMenu = document.querySelector('.btn-menu__text-menu');
const catalog = document.querySelector('.catalog');
const menuList = document.querySelector('.menu__list');

// const bottomHeaderContainer = document.querySelector('.bottom-header__container');
// catalog btn
catalogBtn.addEventListener('click', () => {
    burgerLine.classList.toggle('burger__line_active');
    // toogle text on menu button
    btnMenuBtn.classList.toggle('btn-menu__btn_catalog');    
    // btnMenuTextClose.classList.toggle('btn-menu__text-close_active');
    // btnMenuTextMenu.classList.toggle('btn-menu__text-menu_active');
    catalog.classList.toggle('catalog_active');
});

// bottom header container
btnMenuBtn.addEventListener('click', (e) => {
    const btnMenu = e.target.closest('.btn-menu__btn');
    if(!btnMenu) return;
    console.log(btnMenu);
    burgerLine.classList.toggle('burger__line_active');
    if(btnMenu.classList.contains('btn-menu__btn_catalog')) {
        catalog.classList.remove('catalog_active');
        // btnMenuBtn.classList.toggle('btn-menu__btn_catalog'); 
        btnMenu.classList.toggle('btn-menu__btn_catalog');   
    } else {
        menuList.classList.toggle('menu__list_active');
    }
});

// if(burgerLine) {
//     // menuBody = document.querySelector('menu__body');
//     burgerLine.addEventListener('click', (e) => {
//         burgerLine.classList.toggle('burger__line_active');
//         // menuBody.classList.toggle('_active');
//         document.body.classList.toggle('body_lock');
//     });
// }
// let menuOpen = false;
// burgerLine.addEventListener('click', ()=> {
//     if(!menuOpen) {
//         burgerLine.classList.add('burger__line_open');
//         menuOpen=true;
//     }
//     else {
//         burgerLine.classList.remove('burger__line_open');
//         menuOpen=false;
//     }
// })
