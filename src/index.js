import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

function createTabs() {
    const nav = document.createElement('nav');

    const homeButton = document.createElement('button');
    homeButton.classList.add('nav-button');
    homeButton.textContent = "Home";
    homeButton.addEventListener('click', (e) => {
        if (e.target.classList.contains("active")) {
            return;
        }
        setActiveButton(homeButton);
        loadHome();
    });
    nav.appendChild(homeButton);

    const menuButton = document.createElement('button');
    menuButton.classList.add('nav-button');
    menuButton.textContent = "Menu";
    menuButton.addEventListener('click', (e) => {
        if (e.target.classList.contains("active")) {
            return;
        }
        setActiveButton(menuButton);
        loadMenu();
    });
    nav.appendChild(menuButton);


    const contactButton = document.createElement('button');
    contactButton.classList.add('nav-button');
    contactButton.textContent = "Contact";
    contactButton.addEventListener('click', (e) => {
        if (e.target.classList.contains("active")) {
            return;
        }
        setActiveButton(contactButton);
        loadContact();
    });
    nav.appendChild(contactButton);

    return nav;
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll('.nav-button');

    buttons.forEach((button) => {
        if (button !== this) {
            button.classList.remove('active');
        }
    });
    button.classList.add('active');
}

function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    const restaurantName = document.createElement('h1');
    restaurantName.classList.add('restaurant-name');
    restaurantName.textContent = "Very Cool Restaurant";

    header.appendChild(restaurantName);
    header.appendChild(createTabs());

    return header;
}

function createMain() {
    const main = document.createElement('main');
    main.classList.add('main');
    main.setAttribute("id", "main");
    return main;
}

function renderWebsite() {
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createMain());

    setActiveButton(document.querySelector('.nav-button'));
    loadHome();
}

renderWebsite();

//content.appendChild(loadHome());
//content.appendChild(loadMenu());
//content.appendChild(loadContact());