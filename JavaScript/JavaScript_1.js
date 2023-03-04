//USING SWITCH STATEMENT
function sportFunction() {
    var reply;
    var sports = document.getElementById("sportInput").value;
    var wrong = " is not my favorite sport.";
    switch(sports) {
        case "Soccer":
            reply = "Soccer is my favorite sport!"
        break;
        case "Football":
            reply = "Football " + wrong;
        break;
        case "Basketball":
            reply = "Basketball " + wrong;
        break;
        case "Baseball":
            reply = "Baseball " + wrong;
        break;
        case "Volleyball":
            reply = "Volleyball " + wrong;
        break;
        case "Tennis":
            reply = "Tennis " + wrong;
        break;
        case "Weight Lifting":
            reply = "Weight Lifting " + wrong;
        break;
        case "Chess":
            reply = "That's not even a sport!";
        break;
        default:
            reply = "Please enter the sport exactly as written above."
    }
    document.getElementById("output").innerHTML = reply;
}

//GET ELEMENT BY CLASS
function classFunction() {
    document.getElementsByClassName("class1")[0].innerHTML = "Text has changed";
}
