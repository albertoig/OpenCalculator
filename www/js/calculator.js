/**
 * Calculator functionality library
 * @type {Function}
 */
var Calculator = (function(idInputCalc, idButton) {

	var idInput = idInputCalc;
	var idCalcButton = idButton;
	var oMathLibrary = new mathLibrary();

	/**
	 * Print character on selected input
	 * @param character
	 * @returns {*}
     */
	var printOnInput = function(character){
		return document.getElementById(idInput).value += character;
	};

	document.onkeydown = function(e) {
		constantEntered = false;
		e = e || window.event;
		switch (e.keyCode) {
			case 13:
				addToStack();
				break;
			case 48:
				printOnInput(0);
				break;
			case 49:
				printOnInput(1);
				break;
			case 50:
				printOnInput(2);
				break;
			case 51:
				printOnInput(3);
				break;
			case 52:
				printOnInput(4);
				break;
			case 53:
				printOnInput(5);
				break;
			case 54:
				printOnInput(6);
				break;
			case 55:
				printOnInput(7);
				break;
			case 56:
				printOnInput(8);
				break;
			case 57:
				printOnInput(9);
				break;
			case 69:
				constant('e');
				break;
			case 88:
				operator("multiply");
				break;
			case 173:
				operator("subtract");
				break;
			case 191:
				operator("divide");
				break;
		}
	};
	
	/**
	 * Clean selected input text
	 * @param numberOfCharacters
	 * @returns {*}
     */
	var cleanInput = function(numberOfCharacters) {
		if(numberOfCharacters === 0) {
			return document.getElementById(idInput).value = '';
		}
		return document.getElementById(idInput).value = _cleanCharacters(numberOfCharacters);
	};

	/**
	 * Return string from input cleaning the specified number of characters
	 * @param numberOfCharacters
	 * @private
     */
	var _cleanCharacters = function(numberOfCharacters) {
		var inputCalculator = document.getElementById(idInput);
		var length = inputCalculator.value.length - numberOfCharacters;
		return document.getElementById(idInput).value.substr(0, length);
	};

	/**
	 * Calculate operation from input
	 */
	var operate = function(){
		var inputText = document.getElementById(idInput);
		var operations = inputText.value;
		return (inputText.value = oMathLibrary.calculate(operations));
	};

	/**
	 * Public methods
	 */
	return {
		checkText: function(e) {
			return checkText(e);
		},
		cleanInput: function(numberOfCharacters) {
			return cleanInput(numberOfCharacters);
		},
		printOnInput: function(character){
			return printOnInput(character);
		},
		operate: function() {
			return operate();
		}
	}
});

