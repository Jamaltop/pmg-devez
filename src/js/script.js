// Подключение функционала "Чертогов Фрилансера"
// import { isMobile } from "./files/functions.js";
// Подключение списка активных модулей
// import { flsModules } from "./files/modules.js";


const dropdown1 = document.querySelector('.header__menu-item--dropdown1');
const dropdown2 = document.querySelector('.header__menu-item--dropdown2');
const arrow1 = document.querySelector('.header__menu-arrow-1');
const arrow2 = document.querySelector('.header__menu-arrow-2');
const dropdownList1 = document.querySelector('.header__menu-dropdown-list1');
const dropdownList2 = document.querySelector('.header__menu-dropdown-list2');


arrow1.addEventListener('click' ,() => {
  arrow1.classList.toggle('rotate-180');
  dropdownList1.classList.toggle('active');
  dropdownList1.style.animation = 'dropdown-animation-open 0.3s ease';
})
dropdown2.addEventListener('click', () => {
    arrow2.classList.toggle('rotate-180');
    dropdownList2.classList.toggle('active');
    dropdownList2.style.animation = 'dropdown-animation-open 0.3s ease';
});

window.addEventListener('click', (e) => {
    if (!e.target.closest('.header__menu-item')) {
        dropdownList1.classList.remove('active');
        dropdownList2.classList.remove('active');
        arrow1.classList.remove('rotate-180');
        arrow2.classList.remove('rotate-180');
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const menu = document.getElementById('menu');
  
  
    const toggleMenu = () => {
      burger.classList.toggle('active');
      menu.classList.toggle('eshe')
      menu.classList.toggle('active');
      document.body.classList.toggle('lock');
    };
  
    burger.addEventListener('click', toggleMenu);
  
   
    document.querySelectorAll('.menu-fullscreen__link').forEach(link => {
      link.addEventListener('click', toggleMenu);
    });
  });
  