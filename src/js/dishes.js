import templateMenu from '../templates/menutemplate.hbs'
import menu from './menu.json';

const dishesList = document.querySelector('.js-menu')
const listMenu = templateMenu(menu);

dishesList.insertAdjacentHTML("beforeend", listMenu);

