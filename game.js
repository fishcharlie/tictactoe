// Defining var's

var gameArray = [['.', '.', '.'], ['.', '.', '.'], ['.', '.', '.']];
var whosTurn = 'X';
start();

function checkView(gameArray) {
	for (var x = 0; x < gameArray.length; x++) {
		for (var y = 0; y < gameArray[x].length; y++) {
			setCell(gameArray[x][y], x, y);
		}
	}
}

function setCell(value, x, y) {
	console.log(value);
	console.log(x);
	console.log(y);

	var cell = document.getElementById(x.toString() + y.toString());
	if (value == 'X') {
		cell.classList.add('x');
		cell.textContent = 'X';
		gameArray[x][y] = 'X';
	}
	else if (value == 'O') {
		cell.classList.add('o');
		cell.textContent = 'O';
		gameArray[x][y] = 'O';
	}
	else if (value == '.'){
		clearCell(x, y);
	}
}

function clearCell(x, y) {
	var cell = document.getElementById(x.toString() + y.toString());
	if (cell.classList.contains('x')) {
		cell.classList.remove('x');
	}
	if (cell.classList.contains('o')) {
		cell.classList.remove('o');
	}
	cell.textContent = '';
}

function move(id) {
	if (gameArray[id[0]][id[1]] == '.') {
		setCell(whosTurn,id[0],id[1]);
		changeMove();
	}
}

function changeMove() {
	if (whosTurn == 'X') {
		whosTurn = 'O';
	}
	else if (whosTurn == 'O') {
		whosTurn = 'X';
	}
	var infoText = document.getElementsByClassName('infoText')[0];
	infoText.textContent = whosTurn + '\'s Turn!';
}

function start() {
}
