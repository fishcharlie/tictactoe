// Defining var's

var gameArray = [['.', '.', '.'], ['.', '.', '.'], ['.', '.', '.']];
var whosTurn = 'X';
var winnerStatus = false;
start();

function checkView(gameArray) {
	for (var x = 0; x < gameArray.length; x++) {
		for (var y = 0; y < gameArray[x].length; y++) {
			setCell(gameArray[x][y], x, y);
		}
	}
}

function setCell(value, x, y) {
	var cell = document.getElementById(x.toString() + y.toString());
	if (value == 'X') {
		cell.classList.add('x');
		cell.textContent = 'X';
		gameArray[x][y] = 'X';
		checkBoard();
		if (winnerStatus !== true) {
			cell.classList.add('animatexclass');
		}
	}
	else if (value == 'O') {
		cell.classList.add('o');
		cell.textContent = 'O';
		gameArray[x][y] = 'O';
		checkBoard();
		if (winnerStatus !== true) {
			cell.classList.add('animateoclass');
		}
	}
	else if (value == '.'){
		clearCell(x, y);
	}
}

function clearCell(x, y) {
	var cell = document.getElementById(x.toString() + y.toString());
	if (cell.classList.contains('x')) {
		cell.classList.remove('x');
		cell.classList.remove('animatexclass');
	}
	if (cell.classList.contains('o')) {
		cell.classList.remove('o');
		cell.classList.remove('animateoclass');
	}
	if (cell.classList.contains('winnerCell')) {
		cell.classList.remove('winnerCell');
	}
	cell.textContent = '';
}

function move(id) {
	if (winnerStatus === false) {
		if (gameArray[id[0]][id[1]] == '.') {
			setCell(whosTurn,id[0],id[1]);
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
	gameArray = [['.', '.', '.'], ['.', '.', '.'], ['.', '.', '.']];
	checkView(gameArray);
	whosTurn = 'X';
	var infoText = document.getElementsByClassName('infoText')[0];
	infoText.textContent = whosTurn + '\'s Turn!';
	winnerStatus = false;
}

function checkBoard() {
	var tile00 = document.getElementById('00');
	var tile01 = document.getElementById('01');
	var tile02 = document.getElementById('02');
	var tile10 = document.getElementById('10');
	var tile11 = document.getElementById('11');
	var tile12 = document.getElementById('12');
	var tile20 = document.getElementById('20');
	var tile21 = document.getElementById('21');
	var tile22 = document.getElementById('22');

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
}

function checkTie() {
	if (winnerStatus !== true) {
		var tilesUsed = 0;
		for (var x = 0; x < gameArray.length; x++) {
			for (var y = 0; y < gameArray[x].length; y++) {
				if (gameArray[x][y] != '.') {
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

function start() {
}
