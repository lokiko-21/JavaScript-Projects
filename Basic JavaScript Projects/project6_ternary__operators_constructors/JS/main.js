//TERNARY OPERATORS

function rideFunction () {
    var height, canRide;
    height = document.getElementById("height").value;
    canRide = (height < 52) ? "You're too short" : "You're tall enough";
    document.getElementById("ride").innerHTML = canRide + " to ride.";
}


//CONSTRUCTORS

function rider(Gender, Age, Height) {
    this.riderGender = Gender;
    this.riderAge = Age;
    this.riderHeight = Height;
}

var Kevin = new rider("Male", 32, "155 Centimeters tall");
var Max = new rider("Male", 44, "176 centimeters tall");
var Marco = new rider("male", 20, "163 centimeters tall");

function myFunction() {
    document.getElementById("newAndThis").innerHTML =
    "Marco is a " + Marco.riderAge + "-year old " + Marco.riderGender +
    " who is tall enough to ride because he's " + Marco.riderHeight;
}


//NESTED FUNCTION
function nestFunction() {
    document.getElementById("nest").innerHTML = counter();
    function counter() {
        var startPoint = 0;
        function addOne() {startPoint += 1; }
        addOne();
        return startPoint;
    }
}