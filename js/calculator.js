/**
 * Calculator functionality library
 * @type {Function}
 */
var Calculator = (function(id) {

	var idInput = id;

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
	var calculate = function(){

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
		calculate: function() {
			return calculate();
		}
	}
});
