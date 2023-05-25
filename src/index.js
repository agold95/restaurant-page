import renderHome from './home';
import renderMenu from './menu';
import renderContact from './contact';

const content = document.getElementById('content');

content.appendChild(renderHome());
//content.appendChild(renderMenu());
//content.appendChild(renderContact());