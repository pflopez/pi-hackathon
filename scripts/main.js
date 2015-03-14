//global!!
var gameState;

$(function() {
  //Create a new game
  gameState = new GameState();
  //on start show menu window.
  gameState.setMenuScreen();

  $('.startgame').click(function(){
    // Create a new gameplay
    var gamePlay  = new GamePlay();
    //get game screen
    gameState.setGameScreen();
    //start game
    gamePlay.startGame();
    
  });
});