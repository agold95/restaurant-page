import './style.css';
import Hotdog from './assets/hotdog.png';
import Hamburger from './assets/hamburger.jpg';
import Pizza2 from './assets/pizza2.jpg';
import Icecream from './assets/icecream.jpg';
import { createDiv, createHeader1, createHeader4, createparagraph, createImg } from './usefulfunctions';

function renderMenu() {
    // Creates container for menu content
    const menuContent = createDiv('menu-content');

    /*
    // Creates container and title content
    const menu_title = menuContent.appendChild(createDiv('menu-title'));
    menu_title.appendChild(createHeader1('Menu'));
    */

    // Creates container for menu items
    const menu_grid = menuContent.appendChild(createDiv('menu-grid'));

    // Appends menu items
    const hotdog_container = menu_grid.appendChild(createDiv('hotdog-container'));
    hotdog_container.appendChild(createImg(Hotdog, "hot dog"));
    hotdog_container.appendChild(createparagraph('Hot dogs!'))

    const hamburger_container = menu_grid.appendChild(createDiv('hamburger-container'));
    hamburger_container.appendChild(createImg(Hamburger, "Hamburger"));
    hamburger_container.appendChild(createparagraph('Hamburgers!!'))

    const pizza2_container = menu_grid.appendChild(createDiv('pizza2-container'));
    pizza2_container.appendChild(createImg(Pizza2, "pizza 2"));
    pizza2_container.appendChild(createparagraph('Pizza!!!'))

    const icecream_container = menu_grid.appendChild(createDiv('icecream-container'));
    icecream_container.appendChild(createImg(Icecream, "icecream"));
    icecream_container.appendChild(createparagraph('Icecream!!!!'))

    // End text for page
    const end_text = menuContent.appendChild(createHeader4('We only serve the <em>very coolest</em> of food at <em><b>Very Cool Restaurant</b></em>.'))

    return menuContent;
}

function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(renderMenu());
  }

export default loadMenu;