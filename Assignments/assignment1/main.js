function vehicle(Make, Model, Year, Color){
    this.vehicleMake = Make;
    this.vehicleModel = Model;
    this.vehicleYear = Year;
    this.vehicleColor = Color;
}

var Jack = new vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction(){
    document.getElementById("keywordsAndConstructors").innerHTML =
    "Jack drives a " + Jack.vehicleColor + "-colored " + Jack.vehicleModel +
    " manufactured in " + Jack.vehicleYear;
}