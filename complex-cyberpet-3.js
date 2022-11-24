class PetType {
    constructor (species, affectionate, irritable, lazy, scruffy, greedy) {
        // This is a string
        this.species = species;
        // All these are simple numbers between 1 and 10
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

class Mood {
    constructor (hungry, bored, dirty, angry, tired){
        // All these are simple numbers between 1 and 100
        // These are dynamic state vars, so all get set by functions as the program runs
        this.hungry = hungry;
        this.dirty = dirty;
        // When the pet is exercised, bored goes down but tired goes up
        this.bored = bored;
        this.tired = tired;
        // This gets computed from the other four
        // If it goes above <insert number here> the owner gets bitten!
        this.angry = angry;
    }
}

class Cyberpet {
    constructor (name, type) {
    this.name = name,
    this.type = type, // PetType object: so far croc, bunny, dog or cat

    // These get set when the user calls a play/clean/feed function
    this.play = true,
    this.feed = true,
    this.clean = true,

    // mood gets calculated by status functions, and also gets referenced/queried by status functions
    // some status functions might bite the user, depending on result, to add a bit of a risk factor
    this.mood = new Mood(50, 50, 50, 50, 50), 

    // health gets worked out last
    // Only needs to be a simple number
    this.health = 100 // This could be made into a virtual attribute, I think.
    this.scorevar = 0; // Use getter and setter methods for this var.
    }

    //
    // GETTERS AND SETTERS
    // use this.score to reference Cyberpet.scorevar
    //
    get score(tmpvar) {
        // Do funcky stuff here
        return this.scorevar;
    }
    set score(tmpvar) {
        // Do funky stuff here
        this.scorevar = tmpvar;
    }
    
    //
    // ACTION FUNCTIONS:
    //

    //changes feed false to true, adds 10 health-capped at 100 /// may modify for dog/not dog
    feedPet () {
        this.food = true;
        this.mood.hungry -= 2 * this.type.greedy;
        this.mood.tired -= 2 * this.type.lazy;
        this.mood.angry -= 100;

        this.mood.angry = this.mood.hungry + this.mood.bored + this.mood.tired + this.mood.dirty;
        this.mood.angry *= Math.floor(this.type.irritable/3)+1;

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
        this.mood.tired += 3 * this.type.lazy;

        this.mood.angry = this.mood.hungry + this.mood.bored + this.mood.tired + this.mood.dirty;
        this.mood.angry *= Math.floor(this.type.irritable/3)+1;

        if (this.mood.angry > 500) {
            this.score -=100;
            console.log(`Ouch! ${this.name} the ${this.type.species} just bit you!`);
            console.log(`Maybe you should feed him?`);
        }

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
        this.mood.tired += 3 * this.type.lazy;

        this.mood.angry = this.mood.hungry + this.mood.bored + this.mood.tired + this.mood.dirty;
        this.mood.angry *= Math.floor(this.type.irritable/3)+1;

        if (this.mood.angry > 500 && this.mood.tired > 70) {
            this.score -= 100;
            console.log(`Ouch! ${this.name} the ${this.type.species} just bit you!`);
            console.log(`Maybe play with him later?`);
        }

        if (this.health < 90) this.health += 10;
        else {
            this.health = 100;
            console.log(`${this.name} is so healthy he doen't really need any more play, but what the heck.`)
        }
    }

    //
    // TIMER FUNCTIONS:
    //
    tick() {
        // Gets called regularly by a timer and modifies this.health.
        this.health -=10;
        this.score += this.health;
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

