var m=Math.round((Math.random()*20)+5)
var n=Math.round((Math.random()*20)+5)
 var matrix=[]
 var side=10
 for(var y = 0; y < m; y++){
 	matrix[y]=[]
   for(var x = 0; x <n; x++){
       


      function getRandInt(max){
return Math.round(Math.random()*Math.floor(max))
 			
			 
      }
 			
 		matrix[y].push(getRandInt(6))	
	
 	}
 }console.log(matrix)










var side = 50;
var grassArr = [];
var xotakerArr = [];
var gishaTichArr = [];
var mardArr = [];
var AxtotumArr = [];

function setup() {
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
                var gsh = new GishaTich(x, y)
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

    frameRate(2);
    createCanvas(matrix[0].length * side, matrix.length * side);
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


    console.log(grassArr.length, xotakerArr.length, gishaTichArr.length, mardArr.length, AxtotumArr.length)
}

