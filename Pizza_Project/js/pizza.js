function getReceipt() {
    //THIS FUNCTION STARTS OUR STRING TO PASS FROM FUNCTION TO FUNCTION,
    //AND GROWING LINE BY LINE INTO A FULL RECEIPT
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    }
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    } else if (selectedSize === "Party Pizza") {
        sizeTotal = 21;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("Size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    //THESE VARIABLES WILL GET PASSED ON TO EACH FUNCTION
    getTopping(runningTotal, text1);
    getVeggie(runningTotal, text1);
};

function getTopping(runningTotal, text1) {
    var toppingTotal = 2;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: (" + toppingArray[j].value + ")");
            text1 = text1 + toppingArray[j].value + "<br>";
        }
    }
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingTotal - 1);
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount + " topping - 1 free topping = " + "$" + toppingTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase Total: $" + runningTotal + ".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" +
        runningTotal + ".00</strong></h3>";
};

function getVeggie(runningTotal, text1) {
    var veggieTotal = 2;
    var selectedVeggie = [];
    var veggieArray = document.getElementsByClassName("veggies");
    for (var k = 0; k < veggieArray.length; k++) {
        if (veggieArray[k].checked) {
            selectedVeggie.push(veggieArray[k].value);
            console.log("selected topping item: (" + veggieArray[k].value + ")");
            text1 = text1 + veggieArray[k].value + "<br>";
        }
    }
    var veggieCount = selectedVeggie.length;
    if (veggieCount > 1) {
        veggieTotal = (veggieTotal - 1);
    } else {
        veggieTotal = 0;
    }
    runningTotal = (runningTotal + veggieTotal);
    console.log("total selected vegetable items: " + veggieCount);
    console.log(veggieCount + " vegetable - 1 free topping = " + "$" + veggieTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase Total: $" + runningTotal + ".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" +
        runningTotal + ".00</strong></h3>";
};