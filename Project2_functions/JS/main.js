function My_First_Function() {          //Defining a function and naming it
    var str="This text is purple";       //Defining a variable and giving it a 
    var result= str.fontcolor("purple"); //string value
    document.getElementById("Purple_Text").innerHTML=result; //Putting the value
                                        //of result into HTML element with "Green_Text" id                             //of result into HTML element with "Green_Text" id
}
function My_First_Function() {
    var sentence ="I am learning";
    sentence =+ "a lot from this book!";
    document.getElementById("Concatenate").innerHTML=sentence;
}
function myFunction(7, 5) {
    return 7 * 5;   // The function returns the product of 7 and 5
  }