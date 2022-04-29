var cardTemplate = document.getElementById('card-template');
let container = document.getElementById('container');

for (let i = 0; i < 10; i++) {
    let clone = cardTemplate.content.firstElementChild.cloneNode(true);
    let header = clone.querySelector('h3.card-header');
    let cont = clone.querySelector('div.content');

    cont.innerHTML = "<button>Testing</button>";
    header.appendChild(document.createTextNode("lorem ipsum"));

    container.appendChild(clone);
}
