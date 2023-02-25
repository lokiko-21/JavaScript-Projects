function rideFunction () {
    var height, canRide;
    height = document.getElementById("height").value;
    canRide = (height < 52) ? "You're too short" : "You're tall enough";
    document.getElementById("ride").innerHTML = canRide + " to ride.";
}