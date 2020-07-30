
alert("Welcome GAMER");
alert("Scoring guidelines : -1 for the wrong guess and +4 for the correct guess");
var numberOfSquares = 6;
var colors =  generateRandomcolors(numberOfSquares);
var sc = document.querySelector("#sco");
var score = 0;
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var code = document.querySelector("#rgbCode");
code.textContent = pickedColor;
var msgDisp = document.getElementById("msgDisplay");
var h1 = document.querySelector("h1");
var reset = document.getElementById("reset");
var easybtn = document.getElementById("easy");
var hardbtn = document.getElementById("hard");

hardbtn.addEventListener("click", function(){
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	numberOfSquares = 6; 
	colors = generateRandomcolors(numberOfSquares);
	pickedColor = pickColor();
	code.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++)
	{
		
			squares[i].style.backgroundColor = colors[i];
		
			squares[i].style.display = "block"; 
		
	}
});

easybtn.addEventListener("click", function(){
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
	numberOfSquares = 3;
	colors = generateRandomcolors(numberOfSquares);
	pickedColor = pickColor();
	code.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++)
	{
		if(colors[i])
		{
			squares[i].style.backgroundColor = colors[i];
		}
		else
		{
			squares[i].style.display = "none"; 
		}
	}
});

reset.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomcolors(numberOfSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change color display to match the picked color
	code.textContent = pickedColor;
	//change the color of the squares 
	for(var i =0; i<squares.length; i++)
	{
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue" ; 
	reset.textContent = "New Colors";
	msgDisp.textContent = "";
	this.textContent = "New Colors";
});

 
 for (var i = 0 ; i< squares.length; i++) {
 	//providing the squares a color
 	squares[i].style.backgroundColor = colors[i];
 	//add click listeners to squares 
 	squares[i].addEventListener("click", function(){
 		//grab the color code of clicked square
 		var clickedColor = this.style.backgroundColor;
 		//compare color code to the given color code
 		if (clickedColor === pickedColor)
 		{
 			//correct guess
 			msgDisp.textContent = "Yeyy!!! Correct...";
 			changeColors(clickedColor);
 			h1.style.backgroundColor = clickedColor;
 			reset.textContent = "Play Again ?"
 			score = score + 4;
 			sc.textContent = score;
 		}
 		else 
 		{
 			//wrong guess
 			this.style.backgroundColor = "#232323";
 			msgDisp.textContent = "Wrong... Try Again!!!" ; 
 			score-- ;
 		}
 	});
 }
function changeColors(color)
{
	//loop through all squares
	for (var i = 0; i < squares.length; i++)
	{
		squares[i].style.backgroundColor = color ; 
	}
}

function pickColor()
{
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomcolors(num)
{
	var arr = [];
	for (var i =0 ; i< num; i++)
	{
		arr.push(randomColors());
	}
	return arr;
}

function randomColors()
{
	//pick a  red from 0-255
	var r = Math.floor(Math.random()*256);
	//pick a green from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick a blue from 0-255 
	var b = Math.floor(Math.random()* 256);

	return  "rgb(" + r + ", " + g + ", " + b + ")";
}