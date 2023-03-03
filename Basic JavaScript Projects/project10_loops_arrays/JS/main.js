//WHILE LOOP FUNCTION
function callLoop() {
    var number = "";
    var A = 1;
    while(A < 6) {
        number += "<br>" + A;
        A++
    }
    document.getElementById("loop").innerHTML = number;
}

//FOR LOOP FUNCTION
var instruments = ["Guitar", "Piano", "Trumpet", "Flute", "Violin", "Drums", "Bass"];
var content = "";
var Y;

function forLoop() {
    for(Y = 0; Y < instruments.length; Y++) {
        content += instruments[Y] + "<br>"
    }
    document.getElementById("listOfInstruments").innerHTML = content;
}

//ARRAY FUNCTION
function arrayFunction() {
    let myArray = [];
    myArray[0] = "Soccer";
    myArray[1] = "Basketball";
    myArray[2] = "Football";
    myArray[3] = "Baseball";
    myArray[4] = "Volleyball";
    myArray[5] = "Dodgeball";
    document.getElementById("array").innerHTML = "The best sport to play is " +
    myArray[0] + ", but the best sport to watch is " + myArray[2] + ".";
}

//CONSTANT FUNCTION
function constantFunction() {
    const videoGame = {type: "FPS", name: "Fortnite: Battle Royale", price: "$0", developers: "Unreal Engine"};
    videoGame.release = "September 26, 2017";
    videoGame.name = "Fornite";
    document.getElementById("constant").innerHTML = "One of my all-time favorite games is " +
    videoGame.name + ", which was released on " + videoGame.release + ", and it only costs " +
    videoGame.price + ".";
}

//USING RETURN INSIDE A FUNCTION
function returnFunction() {
    var returning = Math.PI;
    return returning.toFixed(2);
}
document.getElementById("returned").innerHTML = returnFunction();

//MAKING AN OBJECT
let mainCharacter = {
    name: "Ghost",
    age: "unknown",
    powerType: "wind",
    species: "human",
    weapon: "knife",
    description: function() {
        return "The main character for my game is a " + this.species + " who was nicknamed, " + this.name +
        " at some point. Just like his origins his age is, " + this.age + ". No one knows how he got his " +
        this.powerType + " powers, but he is one with it making him the best assassin out there."
    }
};
document.getElementById("mcObject").innerHTML = mainCharacter.description();

//USING BREAK AND CONTINUE STATEMENTS
let test1 = "";
for (let a = 0; a < 6; a++) {
    if (a == 4) { break; }
    test1 += "The counter is at " + a + "<br>";
}
document.getElementById("break").innerHTML = test1;

let test2 = "";
for (let a = 0; a < 6; a++) {
    if (a == 2) { continue; }
    test2 += "The counter is at " + a + "<br>";
}
document.getElementById("continue").innerHTML = test2;