import menuItem from '../templates/menu-item-template.hbs'
import menu from './menu.json';

console.log(menu);
console.log(menuItem);

const dishesList = document.querySelector('.js-menu')
console.log(dishesList);

 
const listMenu = menuItem(menu);
console.log(listMenu);

    dishesList.insertAdjacentHTML("beforeend", listMenu);



