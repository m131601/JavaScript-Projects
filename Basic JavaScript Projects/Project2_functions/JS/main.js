function My_First_Function() {          //Defining a function and naming it
    var str="This text is purple";       //Defining a variable and giving it a 
    var result= str.fontcolor("purple"); //string value
    document.getElementById("Purple_Text").innerHTML=result; //Putting the value
                                        //of result into HTML element with "Green_Text" id
}

function mFunction(a, b) {
    return a * b;   // The function returns the product of 7 and 5
  }
  
  function tFunction() {  //Concatenate a string
    var y = 20;
    y += 10;
 document.getElementById("Concatenate").innerHTML = y;
}