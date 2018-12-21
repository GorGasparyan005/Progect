var LivingCreature = require("./class.js")

module.exports = class Axtotum extends LivingCreature{
    constructor(x, y) {
        super(x,y);
    }

    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }

    chooseCell(character) {
        return super.chooseCell(character);

    }

    mult() {
        var empty = this.getRandomArr(this.chooseCell(0))
        if (empty && this.energy > 10) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 3
            var gsh = new GishaTich(newX, newY)
            xotakerArr.push(gsh)
        }
    }

    move() {
        var empty = this.getRandomArr(this.chooseCell(0))
        this.energy--;
        if (empty) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 3
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY
        }
    }

    eatGrass() {
        var food = this.getRandomArr(this.chooseCell(2))
        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 3
            matrix[this.y][this.x] = 0
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == newX && xotakerArr[i].y == newY) {
                    xotakerArr.splice(i, 1)
                }
            }

            this.x = newX
            this.y = newY
            this.energy += 2
        }
    }

    
    eatGishatich() {
        var foodGishatic = this.getRandomArr(this.chooseCell(3));
        if (foodGishatic) {
            var newX = foodGishatic[0]
            var newY = foodGishatic[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0
            for (var i in gishaTichArr) {
                if (gishaTichArr[i].x == newX && gishaTichArr[i].y == newY) {
                    gishaTichArr.splice(i, 1)
                }
            }

            this.x = newX
            this.y = newY
            this.energy += 2
        }
    }
    eatXotaker() {
        var foodXotaker = this.getRandomArr(this.chooseCell(2))
        if (foodXotaker) {
            var newX = foodXotaker[0]
            var newY = foodXotaker[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == newX && xotakerArr[i].y == newY) {
                    xotakerArr.splice(i, 1)
                }
            }

            this.x = newX
            this.y = newY
            this.energy += 2
        }
    }
    eatmard() {
        var foodMard = this.getRandomArr(this.chooseCell(4))
        if (foodMard) {
            var newX = foodMard[0]
            var newY = foodMard[1]
            matrix[newY][newX] = 5
            matrix[this.y][this.x] = 0
            for (var i in mardArr) {
                if (mardArr[i].x == newX && mardArr[i].y == newY) {
                    mardArr.splice(i, 1)
                }
            }

            this.x = newX
            this.y = newY
            this.energy += 2
        }
    }


    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in gishaTichArr) {
                if (gishaTichArr[i].x == this.x && gishaTichArr[i].y == this.y) {
                    gishaTichArr.splice(i, 1)
                }
            }
        }
    }



    
}