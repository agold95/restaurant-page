import './style.css';
import Earth from './assets/earth.png';
import { createDiv, createHeader1, createHeader4, createparagraph, createImg } from './usefulfunctions';

function renderContact() {
    // Creates container for contact content
    const contact_content = createDiv('contact-content');

    // Creates container and title content
    const contact_title = contact_content.appendChild(createDiv('contact-title'));
    contact_title.appendChild(createHeader1('Contact'));

    // Creates container for location and information
    const contact_info = contact_content.appendChild(createDiv('contact-info'));
    contact_info.appendChild(createHeader4("Where we're located"));
    contact_info.appendChild(createImg(Earth, "Earth"));
    contact_info.appendChild(createparagraph("<small>...somewhere around here...</small>"))
    contact_info.appendChild(createHeader4("📞 1-(234)-567-8901"));

    return contact_content;
}

export default renderContact;