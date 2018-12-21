



function setup() {


    frameRate(2);
    createCanvas(matrix[50] * side, matrix.length * side);
    background('#acacac');
}




function draw() {
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

    function handleSubmit(evt) {
        var val = input.value;
        if (val != "") {
            socket.emit("send", val);
        }
    }

   

    function handleMessage(msg) {
        var p = document.createElement('p');
        p.innerText = msg;
        chatDiv.appendChild(p);
        input.value = "";
    }

    socket.on('display', handleMessage);

} // main closing bracket

window.onload = main;
