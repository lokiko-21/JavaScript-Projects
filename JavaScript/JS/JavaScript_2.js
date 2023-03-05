function formValidation() {

    //FIRST NAME VALIDATION
    let a = document.forms["myForm"]["firstName"].value;
    if (a == "") {
        alert("First Name must be filled out");
        return false;
    };

    //LAST NAME VALIDATION
    let b = document.forms["myForm"]["lastName"].value;
    if (b == "") {
        alert("Last Name must be filled out");
        return false;
    };

    //PHONE NUMBER VALIDATION
    let c = document.forms["myForm"]["number"].value;
    if (c == "") {
        alert("Phone Number must be filled out");
        return false;
    };

    //EMAIL VALIDATION
    let d = document.forms["myForm"]["email"].value;
    if (d == "") {
        alert("Email Address must be filled out");
        return false;
    };
};