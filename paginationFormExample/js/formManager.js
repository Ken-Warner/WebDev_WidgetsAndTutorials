//get the form
const multiCardForm = document.querySelector("[data-multi-card-form]");
//get each of the cards from the form and convert them into an array
const formCards = Array.from(multiCardForm.querySelectorAll("[data-form-card]"));

//the current card in the array is the one with a class of active
var currentCard = formCards.findIndex(card => {
	return card.classList.contains("active");
});

//initialize the paginator
var paginationCells = new Array();
for (var i = 0; i < formCards.length; i++) {
	//create the cell
	var cell = document.createElement('div');
	cell.classList.add('pagination-cell');
	
	//create a text node with the card number in it
	cell.appendChild(document.createTextNode(i + 1));
}


//if no card was returned we set it to the first one
if (currentCard == -1) {
	currentCard = 0;
	showCard();
}

//the previous card lets us know which way the form is shifting
var prevCard = currentCard;

formCards.forEach(card => {
	card.addEventListener("animationend", e => {
		//remove hidden from the current card
		formCards[currentCard].classList.remove("hidden");
		
		//determine how the new active card slides in
		if (prevCard > currentCard) { //stepped backwards
			formCards[currentCard].classList.add('card-sil');
		} else if (currentCard > prevCard) { //stepped forwards
			formCards[currentCard].classList.add('card-sir');
		}
		
		//if this was a fading out card, then make it hidden
		e.target.classList.toggle("hidden", !e.target.classList.contains("active"));
		
		//flush the sliding classes
		e.target.classList.remove('card-sir');
		e.target.classList.remove('card-sor');
		e.target.classList.remove('card-sil');
		e.target.classList.remove('card-sol');

	});
});

//add an event listner to the entire form, if a next/previous button is clicked, it increments currentCard
multiCardForm.addEventListener('click', e => {
	if (e.target.matches("[data-card-button-next]")) { //next button pressed
		//if moving to the next card, we must validate the current card first
		//get the inputs from the current card
		const inputs = Array.from(formCards[currentCard].querySelectorAll("input"));
		//check their validity, if every input satisfies the condition (reportValidity) then valid = 1, else 0;
		const valid = inputs.every(input => input.reportValidity());
		
		if (valid) {
			//all good here
			prevCard = currentCard;
			currentCard += 1;
			showCard();
		}
	} else if (e.target.matches("[data-card-button-previous]")) {
		//if moving backwards, no need to validate
		prevCard = currentCard;
		currentCard -= 1;
		showCard();
	}
});

//changes the classes on the cards to only show the one the user is currently
//working on
function showCard() {
	for (var i = 0; i < formCards.length; i++) {
		//if this card is the current card and it doesn't have the class of active, add it
		if (i == currentCard) {
			formCards[i].classList.add('active');
		} else {
			formCards[i].classList.remove('active');
		}
	}
	//this is before hidden gets removed from the current card
	//here we must shift out the previous card
	if (prevCard > currentCard) { //stepped backwards
		formCards[prevCard].classList.add('card-sor');
	} else if (currentCard > prevCard) { //stepped forwards
		formCards[prevCard].classList.add('card-sol');
	} else { //initial state
		
	}
}