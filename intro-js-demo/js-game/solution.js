//create a cat and a dog object with 
//name and position properties
//the initial value of position is 0

var cat={name:"fluffy", position:0};
var dog={name:"fido", position:0};


//create an advance function that takes an
//animal (cat or dog) and a moveAmount
//and changes the animal postion by move amount

var advance=function(animal, moveAmount){
  animal.position += moveAmount;
}

//create a checkWinner function that checks the position of 
//both animals and returns the animal who's position
//is more than 20, and null otherwise

var checkWinner=function(animal1, animal2){
  if (animal1.position > 30){
    return animal1
    }
  else if(animal2.position >30 ){
    return animal2
  }
  return null
}

//Create a function display to display 
//that is passed a winner and creates an alert with the winner's name
var display = function(winner){
  alert("The winner is: "+ winner.name + " with a score of " + winner.position);
}

//Create the play function with
//a loop that calls calls advance on each animal with a random number for moveAmoutn
//until one wins and then 
//calls the display fucntion to show the winner 


//Hint: you will need to research how to get a random number in JS

var play=function(){
var winner = null;
cat.position=0;
dog.position=0;

do {
  var rand1 = Math.floor((Math.random() * 5) + 1);
  var rand2 = Math.floor((Math.random() * 5) + 1);
  advance(cat,rand1);
  advance(dog,rand2);
  winner = checkWinner(cat, dog);
}
while (winner === null)

display(winner);

}

//Bonus - refactor: 
// 1. create an array of animals [cat,dog] instead of separate objects.
// 2. refactor advance and winner so they still work
// 3. add a new animal to your array - does the game work now? 