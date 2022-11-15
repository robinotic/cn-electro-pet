class Pet {
    constructor (name, type, colour, temperament, age, prefFood, feedLength, prefinteraction) {
        this.name = name;
        this.type = type;
        this.colour = colour;
        this.temperament = temperament;
        this.age = age;
        this.prefFood = prefFood;
        this.feedLength = feedLength;
        this.prefinteraction = prefinteraction;
    }
    petInfo (name) {
        this.name = name;
        return `Your pet's name is ${this.name}. It is a ${this.colour} ${this.type}. It is ${this.age} old and has a ${this.temperament}. It needs to be fed ${this.food} within ${this.foodLength}.`;
    }
    // feedPet () {
    //     lastfed = lastFed;
    //     if {lastFed < foodLength }
    // }
    // const feedPet = (this.name, this.preffood, this.foodLength) => {
    //     let lastFed = lastFed
    //     if (lastFed < foodLength)
    // }
}
const pet1 = new Pet("pet 1","cat","yellow","angry", 2, "biscuits", 2, "cuddling")

console.log(pet1.petInfo("Diego"))
