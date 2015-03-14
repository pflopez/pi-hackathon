	// TODO
	// add difficulty levels
	// add music
	

function GameState(){
	var state = ['menu', 'playing', 'die', 'won'],
	selectedState = 0,
	level = 0;
	
	function getLevel(){
		return level;
	}

	function getState(){
		return state[selectedState];
	}

	function changeState(state){
		selectedState = state;
	}

	function setMenuScreen() {
		$('.screen').addClass('hidden');
		$('#intro').removeClass('hidden');
		//set state to menu
		changeState(0);
	}

	function setGameScreen(){
		$('.screen').addClass('hidden');
		$('#canvas').removeClass('hidden');
		//set state to menu
		changeState(1);
	}

	function setDieScreen(){
			$('.screen').addClass('hidden');
		$('#die').removeClass('hidden');
		//set state to menu
		changeState(0);
	}
	function setWinScreen(){
		$('.screen').addClass('hidden');
		$('#win').removeClass('hidden');
		//set state to menu
		changeState(3);
	}

	return {
		getLevel: getLevel,
		getState: getState,
		changeState: changeState,
		setMenuScreen: setMenuScreen,
		setGameScreen: setGameScreen,
		setDieScreen: setDieScreen,
		setWinScreen: setWinScreen
	}
}

