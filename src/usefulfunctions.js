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

export {createDiv, createHeader1, createHeader4, createparagraph, createImg};