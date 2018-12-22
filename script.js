var socket = io();
var n = 25;
var m = 25;
var side = 25;
Weather = "Winter";

function setup() {
    frameRate(2);
    createCanvas(n * side, m * side);
    background('#acacac');
}

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
                if (Weather == "Winter") {
                    fill("White");
                }
                else if (Weather == "Spring") {
                    fill("#acacac");
                }
                else if (Weather == "Summer") {
                    fill("#acacac");
                }
                else if (Weather == "Authum") {
                    fill("Orange");
                }
            }

            rect(x * side, y * side, side, side)

            /*fill("blue")
                text(x + " " + y, x * side + side / 2, y * side + side / 2)
            */
        }
    }
}

socket.on('CreateMatrix', drawMatrix);
socket.on('Exanak', weatherFunc);
socket.on('Exanak', function (h) {
    Weather = h;
});


function weatherFunc() {

}
console.log(Weather);

//window.onload = main;
