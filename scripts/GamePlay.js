function GamePlay(){
	var posX          = 0,
    posY          = 0,
    piIndex       = 0,
    currentNumber = 0,
    pi            = "314159265359";
	    
	function createBox( num, isUp ) {
	  var style = 'left:' + (30 * num) + 'px;';
	  
	  if( isUp ){
	    posY ++;
	    
	    piIndex++;
	    currentNumber = 0;
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
	  console.log(pi[piIndex])
	  if(pi[piIndex] == currentNumber -1 ){
	      $("#canvas").addClass('started');
	    isUp = true;
	    console.log('oi')
	  }
	  $('#canvas').append(createBox(posX, isUp));

	  posX++;
	  currentNumber++;
	}

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