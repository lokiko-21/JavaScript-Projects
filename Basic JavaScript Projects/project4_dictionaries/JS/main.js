//INITIATING DICTIONARY FUNCTION
function myDictionary() {

    //ADDING VARIABLE
    var Location = {

        //ADDING KVP'S TO DICTIONARY
        Continent: "North America" ,
        Country: "United States of America" ,
        State: "Washington" ,
        City: "Federal Way" ,
    };

    //DELETING KVP
    delete Location.Country;
    document.getElementById("Dictionary").innerHTML = Location.Country;
}