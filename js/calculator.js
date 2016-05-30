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

	var printOnInput = function(character){
		document.getElementById(idInput).te
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
	 * Public methods
	 */
	return {
		checkText: function(e) {
			return checkText(e);
		}
	}
});
