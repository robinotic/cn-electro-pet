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
let croc = new PetType("crocodile", 0,100,70,50,80);
let bunny = new PetType("woodland bunny", 100,0,20,80,100);
let dog = new PetType("dog", 80,30,20,90,70);
let cat = new PetType("cat", 60,80,80,20,80);

class  Mood {
    constructor (hungry, bored, dirty, angry, tired){
        // All these are simple numbers between 1 and 100
        // These are dynamic state vars, so all get set by functions as the program runs
        this.hungry = hungry;
        this.bored = bored;
        this.dirty = dirty;
        this.angry = angry;
        this.tired = tired;
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

    //changes play false to true, adds 10 health-capped at 100 /// may modify for dog/not dog
    playWithPet () {
        this.play = true;
        if (this.health < 90) this.health += 10;
        else {
            this.health = 100;
            console.log(`${this.name} is so healthy he doen't really need any more play, but what the heck.`)
        }
    }

    //changes feed false to true, adds 10 health-capped at 100 /// may modify for dog/not dog
    feedPet () {
        this.food = true;
        this.health += 10;
        if (this.health > 100) {
            this.health -= 20;
            console.log(`${this.name} is being overfed and getting overweight!`);
        }
    }

    //changes clean false to true, adds 10 health-capped at 100 /// may modify for dog/not dog
    cleanPet () {
        this.clean = true;
        if (this.health < 90) this.health += 10;
        else { 
            this.health = 100;
            console.log(`${this.name} is now really, really clean, and in perfect health!`);
        }
   }

}

let myCroc = new Cyberpet("Stanley", croc);
let myBunny = new Cyberpet("Thumper", bunny);
let myCat = new Cyberpet("Felix", cat);
let myDog = new Cyberpet("Rover", dog);
console.log(myCroc);
console.log(myBunny);
console.log(myCat);
console.log(myDog);

// When I run it using nodejs, I get the following output:

/*

Cyberpet {
  name: 'Stanley',
  type: PetType {
    species: 'crocodile',
    affectionate: 0,
    irritable: 100,
    lazy: 70,
    scruffy: 50,
    greedy: 80
  },
  play: true,
  feed: true,
  clean: true,
  mood: Mood { hungry: 50, bored: 50, dirty: 50, angry: 50, tired: 50 },
  health: 100
}
Cyberpet {
  name: 'Thumper',
  type: PetType {
    species: 'woodland bunny',
    affectionate: 100,
    irritable: 0,
    lazy: 20,
    scruffy: 80,
    greedy: 100
  },
  play: true,
  feed: true,
  clean: true,
  mood: Mood { hungry: 50, bored: 50, dirty: 50, angry: 50, tired: 50 },
  health: 100
}
Cyberpet {
  name: 'Felix',
  type: PetType {
    species: 'cat',
    affectionate: 60,
    irritable: 80,
    lazy: 80,
    scruffy: 20,
    greedy: 80
  },
  play: true,
  feed: true,
  clean: true,
  mood: Mood { hungry: 50, bored: 50, dirty: 50, angry: 50, tired: 50 },
  health: 100
}
Cyberpet {
  name: 'Rover',
  type: PetType {
    species: 'dog',
    affectionate: 80,
    irritable: 30,
    lazy: 20,
    scruffy: 90,
    greedy: 70
  },
  play: true,
  feed: true,
  clean: true,
  mood: Mood { hungry: 50, bored: 50, dirty: 50, angry: 50, tired: 50 },
  health: 100
}

*/


