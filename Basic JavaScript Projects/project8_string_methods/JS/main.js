function concatFunction() {
    var firstName = "Marco ";
    var lastName = "Breton";
    var middleName = "Antonio ";
    var fullName = firstName.concat(middleName, lastName);
    document.getElementById("myName").innerHTML = "My name is " + fullName;
}