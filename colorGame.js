var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");
var numOfSquares = 6;

easyButton.addEventListener("click", function(){
    this.classList.add("selected");
    hardButton.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    //pick a new picked color
    pickedColor = pickColor();

    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
        
    }
});

hardButton.addEventListener("click", function(){
    this.classList.add("selected");
    easyButton.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    //pick a new picked color
    pickedColor = pickColor();

    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }

    h1.style.backgroundColor = "steelblue"
});

resetButton.addEventListener("click", function(){
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new picked color
    pickedColor = pickColor();

    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }

    h1.style.backgroundColor = "steelblue"

    resetButton.textContent = "New Colors"
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click",  function(){
        if(this.style.backgroundColor === pickedColor){
            messageDisplay.textContent = "Correct!"
            resetButton.textContent = "Play Again?"

            //change all squares to the right color as well as the header space
            changeColors(pickedColor);
            h1.style.backgroundColor = pickedColor;
        } else {
            this.style.backgroundColor = "steelblue";
            messageDisplay.textContent = "Try Again!"
        }
    });
}

function changeColors(color){
    for(var x = 0; x < squares.length; x ++){
        squares[x].style.backgroundColor = color;
    }
}

function pickColor(){
    var randomColor = Math.floor(Math.random() * colors.length);
    return colors[randomColor];
}

function generateRandomColors(num){
    var arr = [];

    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }

    return arr;
}

function randomColor(){
    var r = String(Math.floor(Math.random() * 256));
    var g = String(Math.floor(Math.random() * 256));
    var b = String(Math.floor(Math.random() * 256));

    return "RGB("  + r + ", " + g + ", " + b + ")";
}