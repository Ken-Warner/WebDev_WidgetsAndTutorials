//Get range and value elements
var range1 = document.getElementById('range1');
var rangeVal = document.getElementById('range1value');

//get the width and the range of values of the range
var rangeValWidth = rangeVal.clientWidth;
var range1range = range1.max - range1.min;

//these must match the thumb width and maxmin width in the CSS
var range1ThumbWidth = 10;
var range1psuedoBeforeAfterWidth = 50;

//this coefficient determines how the value will translate based
//upon the movement of the range thumb
var range1ScalarCoefficient = (range1.clientWidth - range1ThumbWidth) / range1range;

//An event listener that responds to the change in the range
range1.addEventListener('input', (e) => {
    //set the range value text
    rangeVal.innerText = range1.value;
    //move the value
    rangeVal.style.left = ((range1ScalarCoefficient * (range1.value - range1.min)) + range1psuedoBeforeAfterWidth) -
                (rangeValWidth / 2) + (range1ThumbWidth / 2) + "px";
    //make sure the value has the class to show it
    rangeVal.classList.add('opened');
});

//when focus is lost, hid the value
range1.addEventListener('blur', (e) => {
    rangeVal.classList.remove('opened');
});