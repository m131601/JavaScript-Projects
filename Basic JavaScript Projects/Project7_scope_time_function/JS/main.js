var x = 10;
function Add_numbers_1() {
    document.write(20 + x + "<br>");
}
function Add_numbers_2() {  //Global Variable
    document.write(x + 100);
}
Add_numbers_1();            //Add numbers
Add_numbers_2();

function Add_numbers_1() {  //Local Variable
    var x = 10;
    document.write(20 + x + "<br>");
}
function Add_numbers_2(){
    document.write(x + 100);
}
Add_numbers_1();            //Add numbers
Add_numbers_2();

function getDate() {
    if (new Date().getHours() <18) {
     document.getElementById("Month").innerHTML = "What month is it?";
       }
function Add_numbers_1() { //console.log() method to help us debug our code
    var x = 10;
    console.log(15 + x);
}
function Add_numbers_2() {
    console.log(x + 100);
}
Add_numbers_1();            //if you open the console, you’ll see the error “X is not defined.”
Add_numbers_2();
   }
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}
function Time_function() {              //Time Function using if, else and else if statements
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (TIme >= 12 == Time < 18) {
        Reply =  "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}