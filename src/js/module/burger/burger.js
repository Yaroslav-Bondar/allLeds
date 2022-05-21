const burgerLine = document.querySelector('.burger__line');

if(burgerLine) {
    // menuBody = document.querySelector('menu__body');
    burgerLine.addEventListener('click', (e) => {
        burgerLine.classList.toggle('burger__line_active');
        // menuBody.classList.toggle('_active');
        document.body.classList.toggle('body_lock');
    });
}
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
