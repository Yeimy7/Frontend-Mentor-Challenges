'use strict'
window.addEventListener('load', () => {
    const next = document.getElementById('next');
    const nextb = document.getElementById('nextb');
    const back = document.getElementById('back');
    const backb = document.getElementById('backb');
    const cards = document.querySelectorAll('[data-shop]');
    const menu = document.querySelector('.menu');
    const close = document.getElementById('close');
    const hamburger = document.getElementById('hamburger');
    let list = document.querySelectorAll('.list li a');
    const hero = document.getElementById('home');

    changeHero(0);

    list.forEach(e => {
        e.addEventListener('click', () => {
            menu.style.display = 'none';
        });
    });

    let he = document.body.scrollHeight;
    menu.style.height = he + 'px';

    let i = 0;
    function ahead() {
        if (i < 2) {
            i++;
            cards[i].style.display = 'block';
            changeHero(i);
            allDisplay(i);
        }
    }
    function behind() {
        if (i > 0) {
            i--;
            cards[i].style.display = 'block';
            changeHero(i);
            allDisplay(i);
        }
    }
    next.addEventListener('click', ahead);
    nextb.addEventListener('click', ahead);
    back.addEventListener('click', behind);
    backb.addEventListener('click', behind);
    function allDisplay(i) {
        cards.forEach((e, index) => {
            if (index !== i) {
                e.style.display = 'none';
            }
        });
    }
    close.addEventListener('click', () => {
        menu.style.display = 'none';
    });
    hamburger.addEventListener('click', () => {
        menu.style.display = 'block';
    });

    function changeHero(i) {
        if (document.body.scrollWidth <= 375) {
            hero.style.backgroundImage = `url('../images/mobile-image-hero-${i + 1}.jpg')`;

        } else {
            hero.style.backgroundImage = `url('../images/desktop-image-hero-${i + 1}.jpg')`;
        }
    }



});