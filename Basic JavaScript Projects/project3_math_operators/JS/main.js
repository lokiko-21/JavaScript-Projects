//FUNCTION
function addFunction() {
    var add = 2 + 1;
    document.getElementById("addition").innerHTML = "2 + 1 = " + add;
}

function subFunction() {
    var sub = 8 - 4;
    document.getElementById("subtraction").innerHTML = "8 - 4 = " + sub;
}

function multiFunction() {
    var multi = 3 * 3;
    document.getElementById("multiplication").innerHTML = "3 * 3 = " + multi;
}

function divideFunction() {
    var divide = 6 / 2;
    document.getElementById("division").innerHTML = "6 / 2 = " + divide;
}

function operationFunction() {
    var operation = (4 + 2) / (1 + 1);
    document.getElementById("multiOperation").innerHTML = "(4 + 2) / (1 + 1) = " + operation;
}

function modFunction() {
    var mod = 17 % 5;
    document.getElementById("modulus").innerHTML = "The negative value of the remainder is: " + -mod;
}