function concatFunction() {
    var firstName = "Marco ";
    var lastName = "Breton";
    var middleName = "Antonio ";
    var fullName = firstName.concat(middleName, lastName);
    var section = middleName.slice(2, 5);
    document.getElementById("myName").innerHTML = "My name is " + fullName;
    document.getElementById("slice").innerHTML = section + " is a word that can be found withing my middle name.";
}