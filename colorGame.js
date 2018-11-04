var colors = generateRandomColors(6); //Generate An Array of Random Colors
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor(); //Pick an element from the Colors Array
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.getElementById('reset');
colorDisplay.textContent = pickedColor;

//Selecting the elements of the array and add an event Listener to it
for (var i = 0; i < squares.length; i++) {
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];
  //add click listeners to squares
  squares[i].addEventListener('click', function() {
    //grab color of the picked color
    var clickedColor = this.style.backgroundColor;
    //compare color of the picked color
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = 'Correct!';
      changeColors(clickedColor);
      h1.style.backgroundColor = pickedColor;
      resetButton.textContent = 'Play Again!';
    } else {
      this.style.backgroundColor = '#232323';
      messageDisplay.textContent = 'Try Again';
    }
  });
}

//Adding An Event On Reset Button
resetButton.addEventListener('click', function() {
  //generate all new colors
  colors = generateRandomColors(6);
  //pick a new random color  from array
  pickedColor = pickColor();
  //change colors of squares
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = '#232323';
});

function changeColors(color) {
  //loop through squares
  for (var i = 0; i < squares.length; i++) {
    //change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}
function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
function generateRandomColors(num) {
  //make an array
  var arr = [];
  //add num random colors to array
  for (var i = 0; i < num; i++) {
    //get random colors and push into array
    arr.push(randomColor());
  }
  //return the array
  return arr;
}
function randomColor() {
  //pick a red from 0-255
  var r = Math.floor(Math.random() * 256);
  //pick a green from 0-255
  var g = Math.floor(Math.random() * 256);
  //pick a blue from 0-255
  var b = Math.floor(Math.random() * 256);
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
