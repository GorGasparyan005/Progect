var LivingCreature = require("./class.js")

module.exports = class Grass extends LivingCreature {
    constructor(x, y) {
        super(x, y);
    }

    chooseCell(character) {
        return super.chooseCell(character);

    }

    mult() {
        var empty = getrandom(this.chooseCell(0))
        this.multiply++
        if (empty && this.multiply > 3) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 1
            var newGr = new Grass(newX, newY)
            grassArr.push(newGr)
        }
    }
}