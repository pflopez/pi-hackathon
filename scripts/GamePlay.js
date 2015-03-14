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

	function runnerJumps() {
		var runner = $("#runnercanvas");
		var upPos = {top: '45%'};
		runner.css(upPos);

		setTimeout(function(){
			upPos = {top: '60%'};
			runner.css(upPos);
    	}, 300);
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
    		$("#runnercanvas").append(createRunner(posX, posY));
	  }
	  $('#canvas').append(createBox(posX));

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