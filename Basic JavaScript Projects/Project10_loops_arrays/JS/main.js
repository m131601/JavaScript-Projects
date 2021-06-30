function count_To_Ten() {
    var Digit = "";
    var x = 1;
    while (x < 11) {  //a while loop
        Digit += "<br>" + x; //the <br> tag within our string to cause spacing between lines of text.
        x++;    //used to add one
    }
    document.getElementById("Counting_To_Ten").innerHTML = Digit;
}
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {   //a for loop
    for (Y = 0; Y< Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}