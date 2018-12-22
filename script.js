

var n = 25;
var m = 25;
var side = 25;
function setup() {


    frameRate(2);
    createCanvas(n * side, m * side);
    background('#acacac');
}


var Weather = "Winter";








function drawMatrix(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("LIGHTSALMON");
            }
            else if (matrix[y][x] == 5) {
                fill("black");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }

            rect(x * side, y * side, side, side)

            /*fill("blue")
                text(x + " " + y, x * side + side / 2, y * side + side / 2)
            */
        }
    }
}
function main() {
    var socket = io();
    var chatDiv = document.getElementById('chat');
    var input = document.getElementById('message');
    var button = document.getElementById('submit');
    var btDelete = document.getElementById('delete');


    socket.on('CreateMatrix', drawMatrix);

    socket.on('Exanak', function (h) {
        Weather = h;
    });
} // main closing bracket

window.onload = main;
