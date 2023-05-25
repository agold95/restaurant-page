import './style.css';
import Pizza from './assets/pizza.jpg';
// import Wood from './assets/wood.jpg'; (dont think i need this)
import { createDiv, createHeader1, createHeader4, createparagraph, createImg } from './usefulfunctions';


function renderHome() {
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

export default renderHome;