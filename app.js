// talk about how the lesson today is partly about the original text-basedd RPGs

// Review variables again
// when reviewing strings, review string concatenation
// do things like create two variables that store numbers 
// and create another variable that is equal to the sum of the two numbers

// after that teach if statements and also how to use prompt statements
// also go over how \n means new line

prompt("Would you like ice cream?");
// the problem with ^this is that we need to store it in a variable

var turnOnCar = prompt("Do you want to turn on the car? Y/N");

if (turnOnCar == "Y") {
    console.log("Engine turning on...");
} else if (turnOnCar == "N") {
    console.log("The car is still off");
} else {
    console.log("I'm not sure what you mean...");
}

// what else would we want to do if we turn on a car?
// probably drive it, right. Let's edit our previous code (only the first part of it):
if (turnOnCar == "Y") {
    console.log("Engine turning on...");

    // prior to this ask how to ask the user if he/she wants to drive
    var whereToDrive = prompt("Where do you want to drive?\n1. Walmart\n2. Movie Theater\n3. Vienna Coffee House\n4. School");

    if (whereToDrive == "Walmart") {
        console.log("Driving to Walmart!");
    } else if (whereToDrive == "theater") {
        console.log("Driving to the movie theater");
    } else if (whereToDrive == "Vienna") {
        console.log("Driving to Vienna!");
    } else if (whereToDrive == "School") {
        console.log("Driving to school!");
    }
}

// what if we wanted to drive somewhere else after driving to the first location?
// would we have to include all 4 locations to drive to in every single "else if"?

// If you guessed no, then you'd be right. When we're coding,
// if we have code that we want to repeat often, we can put it in a function

// just for the sake of learning what a function is, let's make an example one before solving our problem
// here's we have a function that asks a question and returns it

// You start off by defining a function, but it doesn't run immediately, you have to call it by it's name for it to run.

function getWakeUpTime() {
    var wakeUpTime = prompt("What time do you get up in the morning? (for now, round to the nearest hour)");

    // after our function is done, we can "return" something which basically means
    // that our function is giving us the result of what it did
    return wakeUpTime;
}

// we don't have to return anything in a function but because we did, we can set a variable equal to our function
var myWakeUptime = getWakeUpTime();
console.log(myWakeUptime);

// I'd like you to make your own function that gets someone's name
// then console.log it to make sure it works:
function getName() {
    var name = prompt("What's your name?");

    return name;
}

var name = getName();
console.log(name);

// alternatively you could have done
console.log(getName());

// we can also provide inputs to our function, and this is where it starts getting fun
// let's say our car has a certain speed; we can store that in a variable
var carSpeed = 0;
function speedUpCar(newSpeed) {
    console.log("You're now driving at " + newSpeed + " miles per hour!");

    carSpeed = newSpeed;

    // we don't always have to return something, and in this case, we won't
}



// we can try it out by doing
speedUpCar(1000);

// anyway, back to the game
var currentLocation = "Home";

function pickLocation() {
    var whereToDrive = prompt("Where do you want to drive?\n1. Walmart\n2. Movie Theater\n3. Vienna Coffee House\n4. School");

    if (whereToDrive == "Walmart") {
        console.log("Driving to Walmart!");
        currentLocation = "Walmart";
    } else if (whereToDrive == "movies") {
        console.log("Driving to the movie theater");
        currentLocation = "the movie theater";
    } else if (whereToDrive == "Vienna") {
        console.log("Driving to Vienna!");
        currentLocation = "Vienna";
    } else if (whereToDrive == "school") {
        console.log("Driving to school!");
        currentLocation = "school";
    }

    return currentLocation
}

// then we can replace our original code and just do this:
if (turnOnCar == "Y") {
    console.log("Engine turning on...");

    // this calls the function we just made
    var location = pickLocation();
    console.log("We are now at " + location);
}

// if we get past this point in the lesson, we can just keep adding on features to the car adventure function
// you can change it to be a bit more modular by making a pick action function that lets you pick
/// either speeding up the car or going to a new location

function pickAction() {
    var action = prompt("Do you want to: \n1. Drive somewhere\n2. Change car speed");

    if (action == "drive") {
        pickLocation();
    } else if (action == "change speed") {
        var newSpeedString = prompt("What do you want your new speed to be?");

        // prompt is actually a function that returns a string. We need to have a number
        // so we'll convert it to a number

        newSpeedNumber = parseInt(newSpeedString);

        speedUpCar(newSpeedNumber);
    }

    // don't add this until the end
    pickAction();
}

// this is where we run everything
if (turnOnCar == "Y") {
    console.log("Engine turning on...");

    pickAction();
}
