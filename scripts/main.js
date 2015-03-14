

$(function() {
  //Create a new game
  var gameState = new GameState();
  //on start show menu window.
  gameState.getMenuScreen();

  $('.startgame').click(function(){
    // Create a new gameplay
    var gamePlay  = new GamePlay();
    //get game screen
    gameState.getGameScreen();
    //start game
    gamePlay.startGame();
    
  });
});