var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var messages = [];

app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);

io.on('connection', function (socket) {
    for (var i in messages) {
        io.sockets.emit("display", messages[i]);
    }
    socket.on("send", function (data) {
        messages.push(data);
        io.sockets.emit("display message", data);
    });
});


var m = Math.round((Math.random() * 20) + 5)
var n = Math.round((Math.random() * 20) + 5)
var matrix = []
function getRandInt(max) {
    return Math.round(Math.random() * Math.floor(max))
}
for (var y = 0; y < m; y++) {
    matrix[y] = []
    for (var x = 0; x < n; x++) {
        matrix[y].push(getRandInt(6))
    }
}
console.log(matrix)


var grassArr = [];
var xotakerArr = [];
var gishaTichArr = [];
var mardArr = [];
var AxtotumArr = [];

var Grass = require("./Grass.js")
var mard = require("./Mard.js")
var Axtotum = require("./Axtotum.js")
var Xotaker = require("./Xotaker.js")
var Gishatich = require("./Gishatich.js")

function random (max)
{
   return Math.round(Math.random() * max) 
}

function getrandom (max)
{
   return Math.floor(Math.random() * max) 
}

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
        grassArr[i].mult()
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
}




