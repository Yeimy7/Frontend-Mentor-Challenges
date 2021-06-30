'use strict'
window.addEventListener('load', () => {
    const iconTop = document.getElementById('icon-top');
    const menu = document.getElementById('menu');
    const close = document.getElementById('close-modal');
    const backModal = document.getElementById('back');
    const modalBig = document.querySelector('.modal-big');
    const save = document.querySelector('.button-save__icon');
    let sw = true;

    save.addEventListener('click', () => {
        document.querySelector('circle').classList.toggle('circle');
        document.querySelector('path').classList.toggle('path');
        (sw)?document.querySelector('.button-save__sentence').innerHTML='Bookmarked':document.querySelector('.button-save__sentence').innerHTML='Bookmark';
        sw=!sw;
        document.querySelector('.button-save__sentence').classList.toggle('green')
    })


    iconTop.addEventListener('click', () => {
        iconTop.classList.toggle('header__icon--closed');
        menu.classList.toggle('display');
    });
    close.addEventListener('click', () => {
        modalBig.classList.remove('display')
        quitar();
    });
    backModal.addEventListener('click', () => {
        modalBig.classList.add('display')
    });


    const btnBamboo = document.getElementById('btn-bamboo');
    const btnBlack = document.getElementById('btn-black');
    const radioBall = document.querySelectorAll('.radio-ball');
    const radioButton = document.querySelectorAll('.radio-button');
    const cardInputs = document.querySelectorAll('.card__inputs');
    const mainCards = document.querySelectorAll('.cardBig');
    const contin = document.querySelectorAll('.continue');
    const message = document.getElementById('message');
    const go = document.getElementById('goIt');

    btnBamboo.addEventListener('click', () => {
        modalBig.classList.add('display');
        radioBall[1].classList.add('display');
        cardInputs[1].classList.add('display');
        mainCards[1].classList.add('border');
        window.scrollTo(0, 300);
    });

    btnBlack.addEventListener('click', () => {
        modalBig.classList.add('display');
        radioBall[2].classList.add('display');
        cardInputs[2].classList.add('display');
        mainCards[2].classList.add('border');
        window.scrollTo(0, 500);
    })

    contin.forEach(e => {
        e.addEventListener('click', () => {
            modalBig.classList.remove('display');
            message.classList.add('display');
        })
    });
    go.addEventListener('click', () => {
        message.classList.remove('display')
        quitar();
    })
    radioButton.forEach((e, index) => {
        e.addEventListener('click', () => {
            quitar();
            radioBall[index].classList.add('display');
            cardInputs[index].classList.add('display');
            mainCards[index].classList.add('border');
        })
    });

    function quitar() {
        radioBall.forEach(e => {
            e.classList.remove('display');
        });
        cardInputs.forEach(e => {
            e.classList.remove('display');
        });
        mainCards.forEach(e => {
            e.classList.remove('border');
        });
    }

})