function my_Dictionary() {  //Dictionary for Animals
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Poodle",
        Age:4,
        Sound:"Woof!"
    };
    delete Animal.Sound; //Deleting the results
    document.getElementById("Dictionay").innerHTML = Animal.Sound; //Display results
}