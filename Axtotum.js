class Axtotum extends mard{
    constructor(x, y) {
        super(x,y);
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
        super.eatGrass();
    }

    eatXotaker() {
        super.eatXotaker();
    }

    eatGishatich() {
        super.eatGishatich();
    }

    eatmard() {
        var foodMard = random(this.chooseCell(4))
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
        super.die();
    }
}