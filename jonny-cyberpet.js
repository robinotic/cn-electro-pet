class Cyberpet {
    constructor (name, type, play, feed, clean) {
    this.name = name, // string name
    this.type = type, // string animal, currently dog or not dog
    this.play = play, // boolean, could poss set as true initially
    this.feed = feed, // boolean
    this.clean = clean, // boolean
    this.health = 100 // starts at full health
    }

    // Editied by Robin on Wednesday morning.

    //
    // STATUS FUNCTIONS:
    //

    //check if pet has been played with, if not dog loses 20 health, other loses 10
    playStatus () {
        if (this.play === true) {
            console.log(`${this.name} is happy, ${this.health} health`);
        }
        else {
            if (this.type == 'dog') this.health -= 20;
            else this.health -=10;
            console.log(`${this.name} is bored, down to ${this.health} health`);
        }
    }

    // check if pet is fed, if not dog loses 60 health, other loses 40
    feedStatus () {
            if (this.feed === true) {
                console.log(`${this.name} is fed, ${this.health} health`);
            }
            else if (this.type == 'dog') {
                this.health -= 60;
                console.log(`hungry ${this.name}, down to ${this.health} health`);
            }
            else {
                this.health -= 40;
                console.log(`hungry ${this.name}, down to ${this.health} health`);
            }   
    }

    // check if pet is clean, removes 20 health if dirty dog, 50 for dirty other
    cleanStatus () {
        if (this.clean === true) {
            console.log(`${this.name} is clean, ${this.health} health`);
        }
        else {
            if (this.type == 'dog') this.health -=20;
            else this.health -=50;
            console.log(`dirty ${this.name} now has ${this.health} health`);
        }
    }

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

    // runs status functions, if reaches 0 declares cyberpet dead
    fullStatus() {
        this.playStatus();
        this.feedStatus();
        this.cleanStatus();
        if (this.health <= 0) {
            console.log(`${this.name} is dead, you are negligent`); //change if to while for infinite loop punishment for being negligent. consequences.
        }
    }


}

const jimmy = new Cyberpet ('jimmy', 'cat', false, false, false);
const dave = new Cyberpet ('dave', 'dog', true, true, true);

// tester scenarios ///////////////////// 

//Blank lines
console.log("\n=======================\n");

//Jimmy
console.log(jimmy);
console.log();
jimmy.cleanPet();
jimmy.fullStatus();
jimmy.feedPet();
jimmy.feedPet();
jimmy.fullStatus();
jimmy.feedPet();
jimmy.feedPet();
jimmy.playWithPet();
jimmy.fullStatus();
jimmy.feedPet();
jimmy.feedPet();
jimmy.fullStatus();
jimmy.feedPet();
jimmy.feedPet();
jimmy.feedPet();
jimmy.feedPet();
jimmy.feedPet();
jimmy.feedPet();
jimmy.feedPet();
jimmy.fullStatus();
console.log();
console.log(jimmy);

//Blank lines
console.log("\n=======================\n");

//Dave
console.log(dave);
console.log();
dave.cleanPet();
dave.fullStatus();
dave.feedPet();
dave.feedPet();
dave.fullStatus();
dave.feedPet();
dave.feedPet();
dave.playWithPet();
dave.fullStatus();
dave.feedPet();
dave.feedPet();
dave.fullStatus();
dave.feedPet();
dave.feedPet();
dave.feedPet();
dave.feedPet();
dave.feedPet();
dave.feedPet();
dave.feedPet();
dave.fullStatus();
console.log();
console.log(dave);



