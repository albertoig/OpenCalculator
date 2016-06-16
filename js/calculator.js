/**
 * Calculator functionality library
 * @type {Function}
 */
var Calculator = (function(id) {

	var idInput = id;
	var oMathLibrary = new mathLibrary();

	var checkText = function(e) {
		if(_checkIfCharacterIsANumber(e) ||
			_checkIfCharacterIsAnOperator(e)){

		}
	};

	/**
	 * Print character on selected input
	 * @param character
	 * @returns {*}
     */
	var printOnInput = function(character){
		return document.getElementById(idInput).value += character;
	};

	/**
	 * Clean selected input text
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
	 * Check if character is a number
	 * @private
	 * @param e
	 * @returns {boolean}
     */
	var _checkIfCharacterIsANumber = function(e) {
		var key = window.Event ? e.which : e.keyCode;
		return (key >= 48 && key <= 57)
	};

	/**
	 * Check if a character is an operator
	 * @private
	 * @param e
	 * @returns {boolean}
     */
	var _checkIfCharacterIsAnOperator = function(e) {
		var key = window.Event ? e.which : e.keyCode;
		return (key >= 48 && key <= 57)
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
