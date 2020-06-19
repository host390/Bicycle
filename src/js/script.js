// function testWebP(callback) {
//     let webP = new Image();
//     webP.onload = webP.onerror = function () {
//         callback(webP.height == 2);
//     };
//     webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
// }
// testWebP(function (support) {
//     if (support == true) {
//         document.querySelector('body').classList.add('webp');
//     } else {
//         document.querySelector('body').classList.add('no-webp');
//     }
// });



// меню бургер

let burger = document.querySelector('.navbar__burger'),
    body = document.querySelector('.navbar__body');

burger.addEventListener('click', function(event) {
    burger.classList.toggle('navbar__burger_active')
    body.classList.toggle('navbar__body_active')

    if (burger.classList.contains('navbar__burger_active')) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'scroll'
    }
})

// какя-то функция которая посиоянно следит за шириной экрана
// если экран больше > 767px то наэать на книпку меню 




// let burger = document.querySelector('.navbar__burger'),
//     list = document.querySelector('.navbar__list'),
//     listMob = document.querySelector('.navbar__list_mobile'),
//     colorbg = document.querySelector('.header__colorbg'),
//     allLi = listMob.querySelectorAll('li'),
//     header = document.querySelector('.header__navbar');

// // alert(allLi.length)

// burger.addEventListener('click', ()=> {
//     burger.classList.toggle('navbar__burger_active');
//     colorbg.classList.toggle('header__colorbg_active');
//     for (let i = 0; i < allLi.length; i++) {
//         allLi[i].classList.toggle('opasity');
//         // alert('добавил' + allL[i])
//     }
//     list.classList.toggle('navbar__list_hidden')
// })

// // карусель
// let circle = document.querySelector('.carules__wrapper'),
//     firstCircle = document.querySelectorAll('.carules__circle');
// let previousActive

// circle.addEventListener('click', function(event) {
//     firstCircle[0].classList.remove('carules__circle_active')
//     if (event.target.tagName != 'BUTTON') return

//     // alert(event.target.tagName)
//     // event.target.classList.add('carules__circle_active')
//     shine(event.target)
// })

// function shine(circle) {
    
//     if (previousActive) {
//         previousActive.classList.remove('carules__circle_active')
//         // alert ('УДАЛЁН ПРЕДЫДУЩИЙ')
//     } else {
//         // alert ('Вы нажали 1 раз')
//     }

//     previousActive = circle;
//     circle.classList.add('carules__circle_active')
// }




// ibg
let allItems = document.querySelectorAll('.ibg');
let itemsImage
let src

for (let i = 0; i < allItems.length; i++) {
    itemsImage = allItems[i].querySelector('img');
    src = itemsImage.getAttribute('src');
    allItems[i].style.backgroundImage = `url(${src})`;
}

    




// allItems[0].style.cssText = 'background: url(`"${img/bg/head.jpg}"`);' 


// slick

$(document).ready(function() {
    $('.carousel__wrapper').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2500,
    });
});





