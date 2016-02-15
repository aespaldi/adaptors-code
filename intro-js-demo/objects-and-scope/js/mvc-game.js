//Code from the original game

// Redo this to use Objects for Animal, Game, View.  
// Can you make it more dynamic? 
  // Can the user choose their animals? 
  // Enter the length of the game?
// Can you create the game table dynamically (instead of hard coded HTML)?


GAME_SIZE=8

function createAnimals(){
  var cat={name:"fluffy", position:0}
  var dog={name:"fido", position:0}
  var pig={name:"piglet", position:0}
  return [cat, dog,pig]
}

var advance=function(animal, moveAmount){
  animal.position += moveAmount
}

var displayAdvance= function(animal, row){
  $("tr").eq(row).children("td").removeClass("active");
  $("tr").eq(row).children("td").eq(animal.position).addClass("active");
}

var checkWinner=function(animals){
  for(i=0;i<animals.length;++i){
   if (animals[i].position >= GAME_SIZE){
    return animals[i]
  }
}
return null
}

var display = function(winner){
  alert("The winner is: "+ winner.name + " with a score of " + winner.position);
}

function initializeGame(){
  animals=createAnimals();
  winner = null;
  $("td").removeClass("active");
  $("tr").first().children("td").eq(0).addClass("active");
  $("tr").last().children("td").eq(0).addClass("active");
}


$(document).ready(function(){

  var animals, winner //global until we have more objects.
  initializeGame();

  $(document).on("keyup",function(e){
    e.preventDefault();
    var row, move=1;
    var pressed = String.fromCharCode(e.which);
    console.log(pressed);
    if(pressed === "C"){
      row=0
      console.log(pressed);
      advance(animals[row], move);
      displayAdvance(animals[row],row);
    }
    else if (pressed === "D"){
      row=1
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