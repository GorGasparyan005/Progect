var LivingCreature = require("./class.js")

module.exports = class Grass extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        
    }
    
    chooseCell(character) {
        return super.chooseCell(character);

    }

    mult() {
        Qanak = 0;
        var empty = this.getRandomArr(this.chooseCell(0))
        this.multiply++
        if (empty && this.multiply > 3) {
            this.Qanak += 1;
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 1
            var newGr = new Grass(newX, newY)
            grassArr.push(newGr)
        }
        return Qanak;
    }
}