//Code from the original game
GAME_SIZE=8

function createAnimals(){
  var cat={name:"fluffy", position:0};
  var dog={name:"fido", position:0};
  var pig={name:"piglet", position:0};
  return [cat, dog,pig]
}

var advance=function(animal, moveAmount){
  animal.position += moveAmount;
}

var displayAdvance= function(animal, row){
  //select the row - remove active
  $("tr").eq(row).children("td").removeClass("active");
  $("tr").eq(row).children("td").eq(animal.position).addClass("active");


}
//REMOVE - will be done by key press
// var advanceAll=function(animals){
//    for(i=0;i<animals.length;++i){
//       var rand = Math.floor((Math.random() * 5) + 1);
//       advance(animals[i],rand)
//     }
// }


var checkWinner=function(animals){
  for(i=0;i<animals.length;++i){
   if (animals[i].position >= GAME_SIZE){
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
//REMOVE - triggered by key press
// var play=function(){

//   do {
//     advanceAll(animals)

//   }
//   while (winner === null)

//   display(winner)
// }

function initializeGame(){
  animals=createAnimals();
  winner = null;
  $("td").removeClass("active");
  $("tr").first().children("td").eq(0).addClass("active");
  $("tr").last().children("td").eq(0).addClass("active");

}

$(document).ready(function(){

//Make your Cat and Dog game work in the browser by doing the following:
  // The game starts with first cell active 
  // When “c” is pressed ("keyup") the cat moves and the first cell in the Cat Row is active.
  // When “d” is pressed the dog moves.

  //Hint: You will want to use the keyup event and bind to the document
  // When either the cat or dog reaches the end, the game is over and a winner is announced.

//add a button for initializing the game
var animals, winner; //global until we have more objects.
initializeGame();

$(document).on("keyup",function(e){
  e.preventDefault();
  var row, move=1;
  var pressed = String.fromCharCode(e.which);
  console.log(pressed);
  if(pressed === "C"){
    row=0;
    console.log(pressed);
    advance(animals[row], move);
    displayAdvance(animals[row],row);
  }
  else if (pressed === "D"){
    row=1;
    advance(animals[row], move);
    displayAdvance(animals[row],row);
  }
  winner = checkWinner(animals);
  if (winner !== null){
    display(winner);
    initializeGame();
  }

});

});
