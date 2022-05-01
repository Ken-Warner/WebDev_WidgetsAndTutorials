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
var closeButtons = document.querySelectorAll(".close-button");
closeButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.target.parentElement.style.display = "none";
    });
});

//All of the buttons in each container
var codeButtons = document.querySelectorAll('[data-button]');

//Put event handlers for each button to show their respective codes
codeButtons.forEach(button => {
    //there are different handlers for each type of button
    if (button.dataset.button == "html") {
        button.addEventListener('click', (e) => {
            e.target.parentElement
                    .parentElement
                    .querySelector('[data-code-html]')
                    .style.display = 'block';
        });
    } else if (button.dataset.button == "css") {
        button.addEventListener('click', (e) => {
            e.target.parentElement
                    .parentElement
                    .querySelector('[data-code-css]')
                    .style.display = 'block';
        });
    } else { //must be js
        button.addEventListener('click', (e) => {
            e.target.parentElement
                    .parentElement
                    .querySelector('[data-code-js]')
                    .style.display = 'block';
        });
    }
});


