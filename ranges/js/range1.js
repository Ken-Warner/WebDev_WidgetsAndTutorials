var range1 = document.getElementById('range1');
var rangeVal = document.getElementById('range1value');

var rangeValWidth = rangeVal.clientWidth;
var range1range = range1.max - range1.min;
var range1ScalarCoefficient = range1.clientWidth / range1range;
console.log(range1ScalarCoefficient);

range1.addEventListener('input', (e) => {
    rangeVal.innerText = range1.value;
    rangeVal.style.left = ((range1ScalarCoefficient * range1.value) + 50) -
                (rangeValWidth / 2) + "px";
});