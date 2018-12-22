var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);

io.on('connection', function (socket) {
});

grassArr = [];
xotakerArr = [];
gishaTichArr = [];
mardArr = [];
AxtotumArr = [];

weather = "Winter";
weatherIndex = 1;
 
QanakG = 0;
QanakM = 0;
QanakA = 0;
QanakGish = 0;
QanakXotaker = 0;



matrix = [50][50];

function getRandInt(max) {
    return Math.round(Math.random() * Math.floor(max))
}
function GetMatrix(w, h) {

    var matrix = [];
    for (var y = 0; y < h; y++) {
        matrix[y] = [];
        for (var x = 0; x < w; x++) {
            var r = Math.floor(Math.random() * 100);
            if (r < 20) r = 0;
            else if (r < 65) r = 1;
            else if (r < 90) r = 2;
            else if (r < 100) r = 3;
            matrix[y][x] = r;
        }
    }
    return matrix;
}

var Grass = require("./Grass.js")
var mard = require("./Mard.js")
var Axtotum = require("./Axtotum.js")
var Xotaker = require("./Xotaker.js")
var Gishatich = require("./Gishatich.js")

function random(max) {
    return Math.round(Math.random() * max)
}

function getrandom(max) {
    return Math.floor(Math.random() * max)
}
matrix = GetMatrix(35, 35)
for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {
            var gr = new Grass(x, y)
            grassArr.push(gr)
        }
        else if (matrix[y][x] == 2) {
            var xt = new Xotaker(x, y)
            xotakerArr.push(xt)
        }
        else if (matrix[y][x] == 3) {
            var gsh = new Gishatich(x, y)
            gishaTichArr.push(gsh)
        }
        else if (matrix[y][x] == 4) {
            var mr = new mard(x, y)
            mardArr.push(mr)
        }
        else if (matrix[y][x] == 5) {
            var ax = new Axtotum(x, y)
            AxtotumArr.push(ax)
        }
    }
}

setInterval(drawServerayin, 1000);

function drawServerayin() {
    for (var i in grassArr) {
        grassArr[i].mult();
       console.log(grassArr[i].mult());
       
        
    }


    for (var i in xotakerArr) {
        xotakerArr[i].eat()
        xotakerArr[i].move()
        xotakerArr[i].mult()
        xotakerArr[i].die()
    }
    for (var i in gishaTichArr) {
        gishaTichArr[i].eat()
        gishaTichArr[i].move()
        gishaTichArr[i].mult()
        gishaTichArr[i].die()
    }


    for (var i in mardArr) {
        mardArr[i].eatGrass()
        mardArr[i].eatGishatich()
        mardArr[i].eatXotaker()
        mardArr[i].move()
        mardArr[i].mult()
        mardArr[i].die()
    }

    for (var i in AxtotumArr) {
        AxtotumArr[i].eatGrass()
        AxtotumArr[i].eatGishatich()
        AxtotumArr[i].eatXotaker()
        AxtotumArr[i].eatmard()
        AxtotumArr[i].move()
        AxtotumArr[i].mult()
        AxtotumArr[i].die()
    }

    io.sockets.emit("CreateMatrix", matrix);

}



function drowWeather(){


    if(weatherIndex == 4){
        weather = "Authum";
    }
    else if(weatherIndex == 3){
        weather = "Summer";
    }
    else if(weatherIndex == 2){
        weather = "Spring";
    }
    else if(weatherIndex == 1){
        weather = "Winter";
    }
    if(weatherIndex == 5){
        weatherIndex = 1;
        weather = "Winter";
    }
    weatherIndex++;
    console.log(weather);
    io.sockets.emit("Exanak", weather);
}
setInterval(drowWeather, 1000);