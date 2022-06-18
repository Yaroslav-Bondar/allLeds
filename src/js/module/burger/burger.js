const burgerLine = document.querySelector('.burger__line');
const catalogBtn = document.querySelector('.catalog__btn');
const btnMenuBtn = document.querySelector('.btn-menu__btn');
const catalog = document.querySelector('.catalog');
// const menuList = document.querySelector('.menu__list');
const menuList = require('../constants/root.js').menuList; 
// console.log(menuList);     
// catalog btn
catalogBtn.addEventListener('click', () => {
    burgerLine.classList.toggle('burger__line_active');
    // set the closing mode of the product catalog
    btnMenuBtn.classList.toggle('btn-menu__btn_catalog');    
    catalog.classList.toggle('catalog_active');
});

// bottom header container, menu button
btnMenuBtn.addEventListener('click', e => {
    const btnMenu = e.target.closest('.btn-menu__btn');
    if(!btnMenu) return;
    burgerLine.classList.toggle('burger__line_active');
    // if the product catalog close mode
    if(btnMenu.classList.contains('btn-menu__btn_catalog')) {
        catalog.classList.remove('catalog_active');
        btnMenu.classList.toggle('btn-menu__btn_catalog');   
    } else {
        menuList.classList.toggle('menu__list_active');
    }
});

