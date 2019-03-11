var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    // mode buttons event listeners
    setupModeButtons();
    // square button event listeners
    setupSquareButtons();

    reset();
}

function setupModeButtons(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

function setupSquareButtons(){
    for(var i = 0; i < squares.length; i++){
        squares[i].addEventListener("click",  function(){
            if(this.style.backgroundColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
    
                //change all squares to the right color as well as the header space
                changeColors(pickedColor);
                h1.style.backgroundColor = pickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!";
            }
        });
    }
}

function reset(){
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new picked color
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    
    //change colors of squares
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
}

resetButton.addEventListener("click", reset);

colorDisplay.textContent = pickedColor;

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

    return "rgb("  + r + ", " + g + ", " + b + ")";
}