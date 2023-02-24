//VARIABLES

var A = "21";
var B = 21;
var C = "Twenty-One";
var D = "Spider-Man"


//JS CONTENT

//USING TYPEOF
document.write("TYPEOF");
document.write(" | ");
document.write(typeof 45);
document.write(" | ");

//USING TYPE COERCION
document.write("TYPE COERCION");
document.write(" | ");
document.write("2" + 1);
document.write(" | ");

document.write(2e310);
document.write(" | ");

//USING (+/-)INFINITY
document.write("INFINITY");
document.write(" | ");
document.write(-2e310);
document.write(" | ");

document.write(10 > 2);
document.write(" | ");

//BOOLEAN OPERATIONS
document.write("BOOLEAN");
document.write(" | ");
document.write(10 < 2);
document.write(" | ");

document.write(11 == 2);
document.write(" | ");
document.write(5 ==5);
document.write(" | ");

//USING === TO COMPARE AVLUES AND DATA TYPES
document.write("USING = = =");
document.write(" | ");
document.write(" | ");
document.write(21 === B);
document.write(" | ");
document.write(D === B);
document.write(" | ");
document.write(A === B);
document.write(" | ");
document.write(C === D);
document.write(" | ");

//LOGICAL OPERATIONS
document.write("LOGICAL");
document.write(" | ");
document.write(21 == 21 || 21 > 1);
document.write(" | ");
document.write(34 > 43 || 13 == 1);
document.write(" | ");



//FUNCTIONS

function myFunction() {
    document.getElementById("test1").innerHTML = 0/0;
    document.getElementById("test2").innerHTML = isNaN('21');
    document.getElementById("test3").innerHTML = isNaN('hehe');
}

function myFunction2() {
    document.getElementById("test4").innerHTML = 2e310;
    document.getElementById("test5").innerHTML = -2e310;
}

function notFunction() {
    document.getElementById("notFalse").innerHTML = !(10 == 5)
    document.getElementById("notTrue").innerHTML = !(10 == 10)
}


//CONSOLE

console.log(6 + 9);
console.log(9 > 10);