function myDictionary() {
    var Location = {
        Continent: "North America" ,
        Country: "United States of America" ,
        State: "Washington" ,
        City: "Federal Way" ,
    };
    document.getElementById("Dictionary").innerHTML = Location.State;
}