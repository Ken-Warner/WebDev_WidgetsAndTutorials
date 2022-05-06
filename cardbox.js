//get a reference to the template and the container to put them in
var cardTemplate = document.getElementById('card-template');
var container = document.getElementById('container');

//create a bunch of containers for testing
for (let i = 0; i < 10; i++) {
    var clone = cardTemplate.content.firstElementChild.cloneNode(true);
    var header = clone.querySelector('h3.card-header');
    var cont = clone.querySelector('div.content');

    cont.innerHTML = "<button>Testing</button>";
    header.appendChild(document.createTextNode("lorem ipsum"));

    container.appendChild(clone);
}

//add event handlers to all the close buttons
var closeButton = document.getElementById("close-button");
closeButton.addEventListener('click', (e) => {
    e.target.parentElement.style.display = "none";
    container.classList.remove('blur');
});

//All of the buttons in each container
var codeButtons = document.querySelectorAll('[data-button]');

//Put event handlers for each button to show their respective codes
codeButtons.forEach(button => {
    //there are different handlers for each type of button
    if (button.dataset.button == "html") {
        button.addEventListener('click', (e) => {
            let content = e.target.parentElement
                    .parentElement
                    .querySelector('[data-code-html]');
            let window = document.getElementById('modal-window-content');
            window.innerText = content.innerText;
            window.parentElement.style.display = 'block';
            container.classList.add('blur');
            document.getElementById('modal-window')
                    .querySelector('h3')
                    .innerText = "HTML";
        });
    } else if (button.dataset.button == "css") {
        button.addEventListener('click', (e) => {
            let content = e.target.parentElement
                    .parentElement
                    .querySelector('[data-code-css]');
            let window = document.getElementById('modal-window-content');
            window.innerText = content.innerText;
            window.parentElement.style.display = 'block';
            container.classList.add('blur');
            document.getElementById('modal-window')
                    .querySelector('h3')
                    .innerText = "CSS";
        });
    } else { //must be js
        button.addEventListener('click', (e) => {
            let content = e.target.parentElement
                    .parentElement
                    .querySelector('[data-code-js]');
            let window = document.getElementById('modal-window-content');
            window.innerText = content.innerText;
            window.parentElement.style.display = 'block';
            container.classList.add('blur');
            document.getElementById('modal-window')
                    .querySelector('h3')
                    .innerText = "JS";
        });
    }
});


