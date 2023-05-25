import './style.css';
import { createDiv, createHeader1, createHeader4, createparagraph, createImg } from './usefulfunctions';

function renderMenu() {
    const menuContent = createDiv('menu-content');

    // Creates container and title content
    const menu_title = menuContent.appendChild(createDiv('menu-title'));
    menu_title.appendChild(createHeader1('Menu'));

    // Creates container and fills with menu items
    const menu_container = menuContent.appendChild(createDiv('menu-content'));
    
    return menuContent;
}

export default renderMenu;