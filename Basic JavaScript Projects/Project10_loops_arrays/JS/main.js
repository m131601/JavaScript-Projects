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
function for_Loop() {   // for loop
    for (Y = 0; Y< Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}
function cat_pics () {
    var Cat_Picture = [];       //created an array of cat pictures
    Cat_Picture [0] = "sleeping";
    Cat_Picture [1] = "playing";
    Cat_Picture [2] = "eating";
    Cat_Picture [3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " +
    Cat_Picture[2] + ".";
}
var s = 92;
document.write(s);
{
    let s = 44;
    document.write("<br>" + s);
}