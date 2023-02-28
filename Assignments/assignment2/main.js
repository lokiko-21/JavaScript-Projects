function toFixedFunction() {
    var number = 123.456789;
    document.getElementById("fixedNum").innerHTML = number.toFixed(2);
}

function valueOfFunction() {
    var text = "Hi how are ya!";
    var result = text.valueOf();
    document.getElementById("valueOfString").innerHTML = result;
}