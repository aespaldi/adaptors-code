//create a cat and a dog object with 
//name and position properties
//the initial value of position is 0



function createAnimals(){
  var cat={name:"fluffy", position:0};
  var dog={name:"fido", position:0};
  var pig={name:"piglet", position:0};
  return [cat, dog,pig]
}


//create an advance function that takes an
//animal (cat or dog) and a moveAmount
//and changes the animal postion by move amount

var advance=function(animal, moveAmount){
  animal.position += moveAmount;
}

var advanceAll=function(animals){
   for(i=0;i<animals.length;++i){
      var rand = Math.floor((Math.random() * 5) + 1);
      advance(animals[i],rand);
    }
}

//create a checkWinner function that checks the position of 
//both animals and returns the animal who's position
//is more than 20, and null otherwise

var checkWinner=function(animals){
  for(i=0;i<animals.length;++i){
   if (animals[i].position > 30){
    return animals[i]
    }
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
  var animals=createAnimals();
  var winner = null;

  do {
    advanceAll(animals);
    winner = checkWinner(animals);
  }
  while (winner === null)

  display(winner);
}

//STOP .  Make sure your game works before doing more. 

//Bonus - refactor: 
// 1. create an array of animals [cat,dog] instead of separate objects.
// 2. refactor advance and winner so they still work
// 3. add a new animal to your array - does the game work now?
// 4. add some more methods if needed to make your play method simpler


//Bonus - Bonus
//Add more functionality:  Play X times, High score, ...