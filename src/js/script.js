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
    let isMenuOpen = false;
  
    const openMenu = () => {
      if (isMenuOpen) return;
      isMenuOpen = true;
      burger.classList.add('active');
      menu.classList.add('active');
      document.body.classList.add('lock');
      // Добавляем класс для анимации после небольшой задержки
      setTimeout(() => {
        menu.classList.add('menu-animating');
      }, 10);
    };

    const closeMenu = () => {
      if (!isMenuOpen) return;
      isMenuOpen = false;
      menu.classList.remove('menu-animating');
      burger.classList.remove('active');
      menu.classList.remove('active');
      document.body.classList.remove('lock');
    };

    const toggleMenu = () => {
      if (isMenuOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    };
  
    // Открытие/закрытие по клику на бургер
    burger.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });
  
    // Закрытие по клику на ссылки
    document.querySelectorAll('.menu-fullscreen__link').forEach(link => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });

    // Закрытие по ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    });

    // Закрытие по клику вне меню
    menu.addEventListener('click', (e) => {
      if (e.target === menu) {
        closeMenu();
      }
    });

    // Предотвращаем закрытие при клике на содержимое меню
    const menuContent = menu.querySelector('.menu-fullscreen__list');
    if (menuContent) {
      menuContent.addEventListener('click', (e) => {
        e.stopPropagation();
      });
    }

    const menuButton = menu.querySelector('.menu-fullscreen__button');
    if (menuButton) {
      menuButton.addEventListener('click', (e) => {
        e.stopPropagation();
      });
    }
  });
