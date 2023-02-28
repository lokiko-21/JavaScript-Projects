function firstFunction() {
    var firstName = "Marco ";
    var lastName = "Breton";
    var middleName = "Antonio ";
    var fullName = firstName.concat(middleName, lastName);
    var section = middleName.slice(2, 5);
    var position = fullName.search("Antonio");
    document.getElementById("myName").innerHTML = "My name is " + fullName;
    document.getElementById("slice").innerHTML = section.toUpperCase() + " is a word that can be found withing my middle name.";
    document.getElementById("search").innerHTML = "Antonio starts in index position " +
    position + " within my full name: " + fullName;
}

function secondFunction() {
    var myAge = 20;
    var randomNumber = 2169.619206;
    document.getElementById("convertToString").innerHTML = myAge.toString();
    document.getElementById("precise").innerHTML = randomNumber.toPrecision(4);
}