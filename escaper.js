var input = document.getElementById('escaper');
var escButton = document.getElementById('escaper-button');

escButton.addEventListener('click', (e) => {
    let modal = document.getElementById('modal-window-content');
    let t = document.createElement('textarea');
    t.textContent = input.value;
    console.log(input.value);
    modal.innerText = t.innerHTML;
    modal.parentElement.style.display = 'block';
});