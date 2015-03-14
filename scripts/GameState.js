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

	function getMenuScreen() {
		$('.screen').addClass('hidden');
		$('#intro').removeClass('hidden');
		//set state to menu
		changeState(0);
	}

	function getGameScreen(){
		$('.screen').addClass('hidden');
		$('#canvas').removeClass('hidden');
		//set state to menu
		changeState(1);
	}

	return {
		getLevel: getLevel,
		getState: getState,
		changeState: changeState,
		getMenuScreen: getMenuScreen,
		getGameScreen: getGameScreen

	}
}

