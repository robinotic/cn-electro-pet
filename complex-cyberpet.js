class PetType {
    constructor (species, temperament) {
        this.species = species;
        this.temperament =temperament; // This needs to be a 'Temperament' object;
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
    this.type = type, // PetType object

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
    */

    }

    // So now we port the rest of the code here, making appropriate changes as we go.
    // I say 'we', I guess it's down to me for now. ;)
    // Give me another ten minutes! (or so)
 
}

