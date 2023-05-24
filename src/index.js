import './style.css';
import Pizza from './assets/pizza.jpg';
import Wood from './assets/wood.jpg';

function createDiv(className) {
    const div = document.createElement('div');
    div.classList = className;

    return div;
}

function createHeader1(content) {
    const h1 = document.createElement('h1');
    h1.textContent = content;

    return h1;
}

function createHeader4(content) {
    const h4 = document.createElement('h4');
    h4.textContent = content;

    return h4;
}

function createparagraph(content) {
    const p = document.createElement('p');
    p.innerHTML = content;

    return p;
}

function createImg(source, alt) {
    const img = document.createElement('img');
    img.src = source;
    img.alt = alt;

    return img;
}

function renderPage() {
    // Creates container for home-page content
    const home_content =  createDiv('home-content');

    // Creates container and title content
    const home_title = home_content.appendChild(createDiv('home-title'));
    home_title.appendChild(createHeader1('Very Cool Restaurant'));

    // Creates home page image
    const home_image = home_content.appendChild(createDiv('home-image'));
    home_image.appendChild(createImg(Pizza, 'pizza'));

    // Creates div and fills with p elements for content
    const home_text = home_content.appendChild(createDiv('home-text'));
    home_text.appendChild(createHeader4('Welcome to Very Cool Restaurant'));
    const home_text_p = home_text.appendChild(createDiv('home-text-p'));
    home_text_p.appendChild(createparagraph('Here at <em><b>Very Cool Restaurant</b></em>, there is a lot of <em>very cool</em> food and <em>very cool</em> drinks.'));
    home_text_p.appendChild(createparagraph('We have great cool food like <b>pizza</b>, <b>hot dogs</b>, <b>hamburgers</b>, and <b>ice cream</b>!'));
    home_text_p.appendChild(createparagraph('Food at <em><b>Very Cool Restaurant</b></em> is only cooked by <em>very cool</em> people and tastes <em>very cool</em> too.'));
    home_text_p.appendChild(createparagraph('We are open only at <em>very cool</em> times of the day, so come on down to <em><b>Very Cool Restaurant</b></em> today!'));

    return home_content;
}

document.body.appendChild(renderPage());