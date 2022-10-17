function menuShow() {
    let menuMobile = document.querySelector('.menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon-menu').src = "src/imagens/close.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon-menu').src = "src/imagens/menu.png";
    }
}

function changedSize() {
    let menuMobile = document.querySelector('.menu');
    if (window.innerWidth <= 760) {
        menuMobile.classList.add('open');
    } else {
        menuMobile.classList.remove('open');
    }
}