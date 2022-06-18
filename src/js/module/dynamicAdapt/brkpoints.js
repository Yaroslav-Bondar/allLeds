
// const constRoot = require('../constants/root.js');
// const BREAK_POINT_MD = constRoot.BREAK_POINT_MD;
// const menuList = constRoot.menuList;



// dynamic adaptive for mobile menu
// if(window.innerWidth <= BREAK_POINT_MD) {
//     // adding a container for dynamic adaptive
//     if(!menuList.querySelector('.menu__item_da')) {
//         const menuListDa = document.createElement('li');
//         menuListDa.classList.add('menu__item', 'menu__item_da');
//         menuListDa.textContent = 'i am adaptive';
//         menuList.prepend(menuListDa);
//     }
// }
// window.addEventListener('resize', () => {
//     if(window.innerWidth <= BREAK_POINT_MD) {
//         // adding a container for dynamic adaptive
//         if(!menuList.querySelector('.menu__item_da')) {
//             // const menuListDa = document.createElement('li');
//             // menuListDa.classList.add('menu__item', 'menu__item_da');
//             // menuListDa.textContent = 'i am adaptive';
//             // menuList.prepend(menuListDa);
//         }
//     } else {
//         // remove a container for dynamic adaptive
//         const menuItemDa = menuList.querySelector('.menu__item_da'); 
//         if(menuItemDa) {
//             menuItemDa.remove();
//         }
//     }
// });