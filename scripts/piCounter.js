// Shows a big couter on top with the pi value
// two modes: 
// on normal mode it adds pi values as the user progresses on the game
// on learning mode pi value is already there, we highlight the position on the user in the game
function PiCounter(){
	var pi = "3.14159265359";

	function setValue(value){
		console.log(value);
		$('#pi-counter').html(value);
	}

	function styleHtml(pos){
		// style the selected number...
		var num = pi.replace(".","").split(''),
		string ='',
		i;

		for(i = 0 ; i < num.length ; i++){
			if(i == pos){
				//highlight
				string += '<span>'+ num[i] + '</span>';
			}else{
				//dont highlight.
				string +=  num[i] ;
			}
		}

		return  '<h1 class="value-holder">' + string + '</h1>';
	}

	function levelUp(pos){
		setValue( styleHtml(pos) );
	}
	function init(){
		setValue(styleHtml(null));
	}

	function reset(){
		$('#pi-counter').html('');
	}

	return {
		init: init,
		levelUp: levelUp,
		reset: reset
	}

}