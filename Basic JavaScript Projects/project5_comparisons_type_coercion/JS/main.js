document.write(typeof 45 + " ");
document.write("| 2" + 1);
document.write(" | " + 2e310);
document.write(" | " + -2e310)

function myFunction() {
    document.getElementById("test1").innerHTML = 0/0;
    document.getElementById("test2").innerHTML = isNaN('21');
    document.getElementById("test3").innerHTML = isNaN('hehe');
}

function myFunction2() {
    document.getElementById("test4").innerHTML = 2e310;
    document.getElementById("test5").innerHTML = -2e310;
}