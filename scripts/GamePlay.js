// TODO!!!

// - Remove boxes as the game progresses
// - Remove timer(set interval) when you loose




function GamePlay(){
	var posX        = 0,
    posY          = 0,
    piIndex       = 0,
    currentNumber = 0,
    pi            = "314159265359",
    goingUp 			= false;
	    
	function createBox( num) {
	  var style = 'left:' + (30 * num) + 'px;';
	  
	  if( goingUp ){
	    posY ++;
	    
	    piIndex++;
	    currentNumber = 0;
	    //reset going up
	    goingUp = false;
	  }
	  
	  style += 'bottom:' +  ( 30 * posY )  + 'px;';
		return '<div class="block" style="'+ style+ '">'+ currentNumber +'</div>';
	};


	function drawBoxes () {
	  var content = []  ;
	  for(i = 0 ; i < 10 ; i++ ){
	    content.push(createBox(i));
	  }
	  $('#canvas').append(content);
	}

	function addBox(){
	  var isUp = false;
	  
	  if(pi[piIndex] == currentNumber -1 ){
    
    // adding this class starts css movement of the screen.
    $("#canvas").addClass('started');

    	
	  }
	  $('#canvas').append(createBox(posX));

	  posX++;
	  currentNumber++;
	}

	function userGoesUp(){
	  if(pi[piIndex] == currentNumber -1 ){
	    //this triggers going up a level.
	    goingUp = true;
	    console.log('GOING UP!')   	
	  }else{
	  	console.log("die!");
	  	//oh bad architecture thing, gameState is defined on main... oh well..
	  	gameState.setDieScreen();


	  }	
	}


	// Listen to space tap
	$(window).keypress(function(e) {
	  if (e.keyCode == 0 || e.keyCode == 32) {
	    userGoesUp();
	  }
	});

	function startGame(){
		window.setInterval(addBox, 500);
	}



	
	return {
		createBox: createBox,
		drawBoxes: drawBoxes,
		addBox: addBox,
		startGame: startGame
	}
}