// TODO!!!

// - Remove timer(set interval) when you loose



// DEPENDENCIES: piCounter , gameState


function GamePlay(){
	var posX        = 0,
    posY          = 0,
    piIndex       = 0,
    currentNumber = 0,
    pi            = "314159265359",
    goingUp 			= false,
    maxSequenceSize=50,
    timer,
    piCounter;
	    
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
	
	function createRunner( x,y) {
	  	return '<div id="runner"><img src="http://www.clipartbest.com/cliparts/pc5/78o/pc578oEKi.gif"/></div>';
	};
	function removeRunner() {
		$("#runnercanvas div").remove();
	}

	function runnerJumps() {
		var runner = $("#runner");
		var botm = runner.css('bottom');
		var upPos = {bottom: 30 + (30 *  posY) + 30 + 'px' };
			
		runner.css(upPos);
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
	  var left = $('#runner').css('left').replace('px','');

		$('#runner').css('left', parseInt(left)  + 31 + 'px');
		
	  canvasCleanup();
	  posX++;
	  currentNumber++;
	}

	function reset(){
		posX          = 0,
    posY          = 0,
    piIndex       = 0,
    currentNumber = 0,
    goingUp 			= false,
    window.clearInterval(timer);
    $(window).off('keypress');
    //remove everything
    $('#canvas').html('');
     // adding this class starts css movement of the screen.
    $("#canvas").removeClass('started');
     // adding this class starts css movement of the screen.
    $("#canvas").addClass('dead');
	}

	function userGoesUp(){
	  if(pi[piIndex] == currentNumber -1 ){
	  	if (piIndex === pi.length-1) {
	  		userWins();
	  	}
	    //this triggers going up a level.
	    goingUp = true;
	    piCounter.levelUp(piIndex);
	    console.log('GOING UP!');
	  }else{
	  	userDies();
	  }	
	}

	function userDies(){
			console.log("die!");
	  	//oh bad architecture thing, gameState is defined on main... oh well..
	  	gameState.setDieScreen();
	  	removeRunner();
	  	reset();
	  	piCounter.reset();
	  	$("#runnercanvas").html('');
	}
	function userWins(){
		console.log("USER WINS!!!!!!");
	  	gameState.setWinScreen();
	  	removeRunner();
	  	reset();
	  	piCounter.reset();
	}


	// Listen to space tap
	$(window).keypress(function(e) {
	  if (e.keyCode == 0 || e.keyCode == 32) {
	  	runnerJumps();
	    userGoesUp();
	  }
	});

	function startGame(){
		if(!piCounter){
			piCounter = new PiCounter();	
		}
		
		piCounter.init();
		$("#canvas").removeClass('dead');
		timer = window.setInterval(addBox, 500);

		$("#canvas").append(createRunner(posX, posY));
	}

	function canvasCleanup() {
		var currLength = $('#canvas div').length,
		deleteSize = '10';
		console.log("canvas size " + currLength );
		if (currLength > maxSequenceSize) {
			$('#canvas div:lt(' + deleteSize + ')').remove();
			console.log("Cleaning canvas");
		}
	}

	return {
		createBox: createBox,
		drawBoxes: drawBoxes,
		addBox: addBox,
		startGame: startGame
	}
}