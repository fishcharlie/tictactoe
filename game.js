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
function start() {
}
