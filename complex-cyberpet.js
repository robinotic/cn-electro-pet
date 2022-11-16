class PetType {
    constructor (species, temperament) {
        this.species = species;  // This is a string
        this.temperament =temperament; // This needs to be a 'Temperament' object
    }
}

class Temperament {
    constructor (affectionate, irritable, lazy, scruffy, greedy) {
        // All these are simple numbers - say between 1 and 100
        // These are intrinsic to the type of animal, so set them in the code
        this.affectionate = affectionate;
        this.irritable = irritable;
        this.lazy = lazy;
        this.scruffy = scruffy;
        this.greedy = greedy;
    }
}

// Define some types of pets, with temperaments, as global variables.
let crocTemp = new Temperament(0,100,70,50,80);
let croc = new PetType("crocodile", crocTemp);
let bunnyTemp = new Temperament(100,0,20,80,100);
let bunny = new PetType("woodland bunny", bunnyTemp);
let dogTemp = new Temperament(80,30,20,90,70);
let dog = new PetType("dog", dogTemp);
let catTemp = new Temperament(60,80,80,20,80);
let cat = new PetType("cat", catTemp);

class  Mood {
    constructor (hungry, bored, dirty, angry, tired){
        // All these are simple numbers - say between 1 and 100
        // These are dynamic state vars, so all get set by functions as the program runs
        this.hungry = hungry;
        this.bored = bored;
        this.dirty = dirty;
        this.angry = angry;
        this.tired = tired;
    }
}

// Global variable
let startingMood = new Mood(50, 50, 50, 50, 50);

class Cyberpet {
    constructor (name, type, play, feed, clean) {
    this.name = name, // string name
    this.type = type, // PetType object: so far croc, bunny, dog or cat

    // These get set when the user calls a play/clean/feed function
    this.play = play, // boolean, could poss set as true initially
    this.feed = feed, // boolean
    this.clean = clean, // boolean

    // mood gets calculated by status functions, and also gets referenced/queried by status functions
    // some status functions might bite the user, to add a bit of a risk factor
    this.mood = startingMood, 

    // health gets worked out last
    // Only needs to be a simple number
    this.health = 100 // starts at full health
    }

    // So now we port the rest of the code here, making appropriate changes as we go.
    // I say 'we', I guess it's down to me for now. ;)
    // Give me another ten minutes! (or so)

    
    //
    // ACTION FUNCTIONS:
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

let myCroc = new Cyberpet("Stanley", croc, true, true, true);
let myBunny = new Cyberpet("Thumper", bunny, true, true, true);
let myCat = new Cyberpet("Felix", cat, true, true, true);
let myDog = new Cyberpet("Rover", dog, true, true, true);
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
    temperament: Temperament {
      affectionate: 0,
      irritable: 100,
      lazy: 70,
      scruffy: 50,
      greedy: 80
    }
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
    temperament: Temperament {
      affectionate: 100,
      irritable: 0,
      lazy: 20,
      scruffy: 80,
      greedy: 100
    }
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
    temperament: Temperament {
      affectionate: 60,
      irritable: 80,
      lazy: 80,
      scruffy: 20,
      greedy: 80
    }
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
    temperament: Temperament {
      affectionate: 80,
      irritable: 30,
      lazy: 20,
      scruffy: 90,
      greedy: 70
    }
  },
  play: true,
  feed: true,
  clean: true,
  mood: Mood { hungry: 50, bored: 50, dirty: 50, angry: 50, tired: 50 },
  health: 100
}

*/


