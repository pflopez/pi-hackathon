

$(function() {
  //Create a new game
  var gameState = new GameState();
  
  // Create a new gameplay
  var gamePlay  = new GamePlay();
  
  window.setInterval(gamePlay.addBox, 500);
  

});