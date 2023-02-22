//Function
function firstFunction() {

    //DEFINING VARIABLES
    var item1 = "First Variable ";
    var item2 = "Second Variable";

    //DEFINING VARIABLE USING CONCATINATION
    var item3 = "This is the first part, "
    item3 += "and this is the second part!"

    //RETURNING ELEMENTS BY USING ID
    document.getElementById("variables").innerHTML = item1 + item2;
    document.getElementById("sentence").innerHTML = item3;
}