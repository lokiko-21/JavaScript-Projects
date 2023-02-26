//LOCAL VS GLOBAL VARIABLES
function location1() {
    var state = "WA";
    document.write("I live in " + state + ". ");
}

var dream = "California"

function location2() {
    document.write(dream + " is where I want to live.")
}

location1();
location2();

//TIME FUNCTION
function timeFunction() {
    if(new Date().getHours() < 12) {
        document.getElementById("time").innerHTML = ("Good Morning!");
    }
}

//PET FUNCTION
function petFunction() {
    pets = document.getElementById("pets").value;
    if (pets > 3) {
        amount = "Wow you also Have a lot of pets, just like me!";
    }
    else {
        amount = "You need more pets!";
    }
    document.getElementById("numberOfPets").innerHTML = amount;
}

//GET TIME FUNTION
function getTime() {
    var Time = new Date().getHours();
    var Reply;
    if(Time < 12 == Time > 0) {
        Reply = "It's morning time!";
    }
    else if (Time >=12 == Time < 18) {
        Reply = "It's afternoon.";
    }
    else {
        Reply = "It's evening time.";
    }
    document.getElementById("timeOfDay").innerHTML = Reply;
}