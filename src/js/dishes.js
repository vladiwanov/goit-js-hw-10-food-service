import TemplateMenu from '../templates/menutemplate.hbs'
import menu from './menu.json';

const dishesList = document.querySelector('.js-menu')
const listMenu = TemplateMenu(menu);

dishesList.insertAdjacentHTML("beforeend", listMenu);

