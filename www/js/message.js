/**
 *
 * @type {Function}
 */
var TooltipMessage = (function(idImage, idTooltip) {

	var ERROR = 0,
		INIT = 1,
		SUCCESSFUL = 2;


	var _changeText = function(text) {
		document.getElementById(idTooltip).value = text;
	};

	var _changeImage = function(image) {
		document.getElementById(idImage).src = image;
	};

	var changeState = function(state) {
		if(state === ERROR){
			_changeText('UPS! I did not control this');
			_changeImage('img/error.jpg');
		} else if(state === INIT){
			_changeText('UPS! I did not control this');
			_changeImage('img/init.jpg');
		} else if(state === SUCCESSFUL){
			_changeText('hey! there is it, is working!');
			_changeImage('img/successful.jpg');
		}
	};

	return {
		changeState: function(state){
			return changeState(state);
		},
		ERRORstate: function(){
			return ERROR;
		},
		INITstate: function(){
			return INIT;
		},
		SUCCESSFULstate: function(){
			return SUCCESSFUL;
		}
	}
});
