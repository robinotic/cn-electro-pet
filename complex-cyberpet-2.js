class PetType {
    constructor (species, affectionate, irritable, lazy, scruffy, greedy) {
        // This is a string
        this.species = species;
        // All these are simple numbers between 1 and 100
        // They define the temperament of the animal
        this.affectionate = affectionate;
        this.irritable = irritable;
        this.lazy = lazy;
        this.scruffy = scruffy;
        this.greedy = greedy;
    }
}

// Define some types of pets, complete with temperaments, as global variables.
let croc = new PetType("crocodile", 1,10,7,5,8);
let bunny = new PetType("woodland bunny", 10,1,2,8,10);
let dog = new PetType("dog", 8,3,2,9,7);
let cat = new PetType("cat", 6,8,8,2,8);

class  Mood {
    constructor (hungry, bored, dirty, angry, tired){
        // All these are simple numbers between 1 and 100
        // These are dynamic state vars, so all get set by functions as the program runs
        this.hungry = hungry;
        this.dirty = dirty;
        // When the pet is execrised, bored goes down but tired goes up
        this.bored = bored;
        this.tired = tired;
        // This gets computed from the other four
        // If it goes above 100, the owner gets bitten!
        this.angry = angry;
    }
}

class Cyberpet {
    constructor (name, type) {
    this.name = name, // string name
    this.type = type, // PetType object: so far croc, bunny, dog or cat

    // These get set when the user calls a play/clean/feed function
    this.play = true, // boolean, could poss set as true initially
    this.feed = true, // boolean
    this.clean = true, // boolean

    // mood gets calculated by status functions, and also gets referenced/queried by status functions
    // some status functions might bite the user, depending on result, to add a bit of a risk factor
    this.mood = new Mood(50, 50, 50, 50, 50), 

    // health gets worked out last
    // Only needs to be a simple number
    this.health = 100 // starts at full health
    }

    // So now we port the rest of the code here, making appropriate changes as we go.
    // I say 'we', I guess it's down to me for now. ;)
    // Give me another ten minutes! (or so)

    
    //
    // ACTION FUNCTIONS:
    // I need to re-write them to refer to this.mood instead of this.health
    //

    //changes feed false to true, adds 10 health-capped at 100 /// may modify for dog/not dog
    feedPet () {
        this.food = true;
        this.mood.hungry -= 2 * this.type.greedy;
        this.mood.tired -= 2 * this.type.lazy;

        this.mood.angry = this.mood.hungry + this.mood.bored + this.mood.tired + this.mood.dirty;
        this.mood.angry *= this.type.irritable;

        this.health += 10;
        if (this.health > 100) {
            this.health -= 20;
            console.log(`${this.name} is being overfed and getting overweight!`);
        }
    }

    //changes clean false to true, adds 10 health-capped at 100 /// may modify for dog/not dog
    cleanPet () {
        this.clean = true;
        this.mood.dirty -= 2 * this.type.scruffy;

        this.mood.angry = this.mood.hungry + this.mood.bored + this.mood.tired + this.mood.dirty;
        this.mood.angry *= this.type.irritable;

        if (this.health < 90) this.health += 10;
        else { 
            this.health = 100;
            console.log(`${this.name} is now really, really clean, and in perfect health!`);
        }
    }    

    //changes play false to true, adds 10 health-capped at 100 /// may modify for dog/not dog
    playWithPet () {
        this.play = true;
        this.mood.bored -= 2 * this.type.affectionate;
        this.mood.tired += 2 * this.type.lazy;

        this.mood.angry = this.mood.hungry + this.mood.bored + this.mood.tired + this.mood.dirty;
        this.mood.angry *= this.type.irritable;

        if (this.health < 90) this.health += 10;
        else {
            this.health = 100;
            console.log(`${this.name} is so healthy he doen't really need any more play, but what the heck.`)
        }
    }

}

let myCroc = new Cyberpet("Stanley", croc);
let myBunny = new Cyberpet("Thumper", bunny);
let myCat = new Cyberpet("Felix", cat);
let myDog = new Cyberpet("Rover", dog);

// Test the action functions...
myCroc.feedPet();
myBunny.playWithPet();
myDog.cleanPet();
myCat.playWithPet();

console.log(myCroc);
console.log(myBunny);
console.log(myDog);
console.log(myCat);

myCroc.cleanPet();
myBunny.feedPet();
myDog.playWithPet();
myCat.feedPet();

console.log(myCroc);
console.log(myBunny);
console.log(myDog);
console.log(myCat);

myCroc.playWithPet();
myBunny.cleanPet();
myDog.feedPet();
myCat.cleanPet();

console.log(myCroc);
console.log(myBunny);
console.log(myDog);
console.log(myCat);

// Just copy and paste into VC, then save with a .js extention to test it.

