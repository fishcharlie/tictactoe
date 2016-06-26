// Defining var's

var gameArray = [['.', '.', '.'], ['.', '.', '.'], ['.', '.', '.']];
var whosTurn = 'X';
var winnerStatus = false;
var xWins = 0;
var oWins = 0;


$(document).ready(function functionName() {
	start();
});
function checkView(gameArray) {
	for (var x = 0; x < gameArray.length; x++) {
		for (var y = 0; y < gameArray[x].length; y++) {
			gameArray[x][y].setCell(gameArray[x][y].value);
		}
	}
}

function move(id) {
	if (winnerStatus === false) {
		var cell = gameArray[id[0]][id[1]];
		if (cell.value == '.') {
			cell.setCell(whosTurn);
			changeMove();
			checkTie();
		}
	}
}

function changeMove() {
	if (winnerStatus === false) {
		if (whosTurn == 'X') {
			whosTurn = 'O';
		}
		else if (whosTurn == 'O') {
			whosTurn = 'X';
		}
		var infoText = document.getElementsByClassName('infoText')[0];
		infoText.textContent = whosTurn + '\'s Turn!';
	}
}

function clearBoard() {
	restart();
	checkView(gameArray);
	whosTurn = 'X';
	var infoText = document.getElementsByClassName('infoText')[0];
	infoText.textContent = whosTurn + '\'s Turn!';
	winnerStatus = false;
}

function resetScoreboard() {
	xWins=0;
	oWins=0;
	updateWins();
}

function checkBoard() {
	var tile00 = gameArray[0][0].htmlTile;
	var tile01 = gameArray[0][1].htmlTile;
	var tile02 = gameArray[0][2].htmlTile;
	var tile10 = gameArray[1][0].htmlTile;
	var tile11 = gameArray[1][1].htmlTile;
	var tile12 = gameArray[1][2].htmlTile;
	var tile20 = gameArray[2][0].htmlTile;
	var tile21 = gameArray[2][1].htmlTile;
	var tile22 = gameArray[2][2].htmlTile;

	if (tile00.textContent == tile10.textContent && tile00.textContent == tile20.textContent && tile00.textContent !== '') {
		winner(tile00.textContent, ['00', '10', '20']);
	}
	else if (tile01.textContent == tile11.textContent && tile01.textContent == tile21.textContent && tile01.textContent !== '') {
		winner(tile01.textContent, ['01', '11', '21']);
	}
	else if (tile02.textContent == tile12.textContent && tile02.textContent == tile22.textContent && tile02.textContent !== '') {
		winner(tile02.textContent, ['02', '12', '22']);
	}
	else if (tile00.textContent == tile01.textContent && tile00.textContent == tile02.textContent && tile00.textContent !== '') {
		winner(tile00.textContent, ['00', '01', '02']);
	}
	else if (tile10.textContent == tile11.textContent && tile10.textContent == tile12.textContent && tile10.textContent !== '') {
		winner(tile10.textContent, ['10', '11', '12']);
	}
	else if (tile20.textContent == tile21.textContent && tile20.textContent == tile22.textContent && tile20.textContent !== '') {
		winner(tile20.textContent, ['20', '21', '22']);
	}
	else if (tile00.textContent == tile11.textContent && tile00.textContent == tile22.textContent && tile00.textContent !== '') {
		winner(tile00.textContent, ['00', '11', '22']);
	}
	else if (tile02.textContent == tile11.textContent && tile02.textContent == tile20.textContent && tile02.textContent !== '') {
		winner(tile02.textContent, ['02', '11', '20']);
	}
}

function winner(winnerXO, arrayOfWinnerTiles) {
	winnerStatus = true;

	var tile1 = document.getElementById(arrayOfWinnerTiles[0]);
	var tile2 = document.getElementById(arrayOfWinnerTiles[1]);
	var tile3 = document.getElementById(arrayOfWinnerTiles[2]);

	tile1.classList.add('winnerCell');
	tile2.classList.add('winnerCell');
	tile3.classList.add('winnerCell');

	var infoText = document.getElementsByClassName('infoText')[0];
	infoText.textContent = winnerXO + ' wins!!!';

	if (winnerXO == 'X') {
		xWins++;
	}
	else if (winnerXO == 'O'){
		oWins++;
	}
	updateWins();
}

function updateWins() {
	var xText = document.getElementById("xwins");
	var oText = document.getElementById("owins");
	xText.textContent = xWins;
	oText.textContent = oWins;
}

function checkTie() {
	if (winnerStatus !== true) {
		var tilesUsed = 0;
		for (var x = 0; x < gameArray.length; x++) {
			for (var y = 0; y < gameArray[x].length; y++) {
				if (gameArray[x][y].value != '.') {
					tilesUsed++;
				}
			}
		}
		if (tilesUsed == 9) {
			var infoText = document.getElementsByClassName('infoText')[0];
			infoText.textContent = 'Tie Game';
		}
	}
}

function cell() {
    this.value = ".";
	this.xPosition = 0;
	this.yPosition = 0;
	this.htmlTile = document.getElementById('00');
}

cell.prototype = {
	setCell: function (value) {
		if (value == 'X') {
			this.htmlTile.classList.add('x');
			this.htmlTile.textContent = 'X';
			this.value = 'X';
			checkBoard();
			if (winnerStatus !== true) {
				this.htmlTile.classList.add('animatexclass');
			}
		}
		else if (value == 'O') {
			this.htmlTile.classList.add('o');
			this.htmlTile.textContent = 'O';
			this.value = 'O';
			checkBoard();
			if (winnerStatus !== true) {
				this.htmlTile.classList.add('animateoclass');
			}
		}
		else if (value == '.'){
			this.clearCell();
		}
	},

	clearCell: function () {
		if (this.htmlTile.classList.contains('x')) {
			this.htmlTile.classList.remove('x');
			this.htmlTile.classList.remove('animatexclass');
		}
		if (this.htmlTile.classList.contains('o')) {
			this.htmlTile.classList.remove('o');
			this.htmlTile.classList.remove('animateoclass');
		}
		if (this.htmlTile.classList.contains('winnerCell')) {
			this.htmlTile.classList.remove('winnerCell');
		}
		this.htmlTile.textContent = '';
	}



};




function restart() {
	for (var x = 0; x < gameArray.length; x++) {
		for (var y = 0; y < gameArray[x].length; y++) {
			var myCell = new cell();
			myCell.xPosition = x;
			myCell.yPosition = y;
			myCell.htmlTile = document.getElementById(x.toString() + y.toString());
			gameArray[x][y]=myCell;
		}
	}
	checkView(gameArray);
}


function start() {
	restart();
}
