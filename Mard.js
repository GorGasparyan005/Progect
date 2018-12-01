class mard extends GishaTich {
    constructor(x, y) {
        super(x, y);
    }

    getNewDirections() {
        super.getNewDirections();
    }

    chooseCell(character) {
        return super.chooseCell(character);
    }

    mult() {
        super.mult();
    }

    move() {
        super.move();
    }

    eatGrass() {
        super.eat();
    }
    eatGishatich() {
        var foodGishatic = random(this.chooseCell(3));
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
        var foodXotaker = random(this.chooseCell(2))
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



    die() {
        super.die();
    }
}