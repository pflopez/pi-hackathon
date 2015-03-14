function GameState(){
	var state = ['menu', 'playing', 'die'],
	selectedState = 0,
	level = 0;

	// TODO
	// difficulty
	
	function getLevel(){
		return level;
	}

	function getState(){
		return state[selectedState];
	}

	function changeState(state){
		selectedState = state;
	}

	return {
		getLevel: getLevel,
		getState: getState,
		changeState: changeState

	}
}

