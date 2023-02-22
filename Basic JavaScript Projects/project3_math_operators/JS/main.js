//FUNCTIONS

//ADDITION
function addFunction() {
    var add = 2 + 1;
    document.getElementById("addition").innerHTML = "2 + 1 = " + add;
}

//SUBTRACTION
function subFunction() {
    var sub = 8 - 4;
    document.getElementById("subtraction").innerHTML = "8 - 4 = " + sub;
}

//MULTIPLICATION
function multiFunction() {
    var multi = 3 * 3;
    document.getElementById("multiplication").innerHTML = "3 * 3 = " + multi;
}

//DIVISION
function divideFunction() {
    var divide = 6 / 2;
    document.getElementById("division").innerHTML = "6 / 2 = " + divide;
}

//MODULUS
function operationFunction() {
    var operation = (4 + 2) / (1 + 1);
    document.getElementById("multiOperation").innerHTML = "(4 + 2) / (1 + 1) = " + operation;
}

//MULTI-OPERATION
function modFunction() {
    var mod = 17 % 5;
    document.getElementById("modulus").innerHTML = "The negative value of the remainder is: " + -mod;
}


//INCREMENTATION AND DECREMENTATION
var X = 21;
document.write("Incrementing 21 by 1 gives me: ")

X++;
document.write(X);

document.write(", and decrementing 22 by 1 brings me back to: ")

X--;
document.write(X);