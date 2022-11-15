class Pet {
    constructor(type, name, health, food) {
        this.type = type;
        this.name = name;
        this.health = health;
        this.food = food;
    }
    tick() {
        if (this.food > 1) {
            this.health++;
            this.food = 0;
        }
        else {
            this.health--;
        }
        // Do lots of other things here
    }
}

