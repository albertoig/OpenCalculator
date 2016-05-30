/**
 * Math Library
 * @type {Function}
 */
var math = (function() {

	/**
	 * Sum Method
	 * @param x
	 * @param y
	 * @returns {*}
	 */
	var sum = function(x, y) {
		return x + y;
	};

	/**
	 * Subtract Method
	 * @param x
	 * @param y
	 * @returns {number}
	 */
	var subtract = function(x, y) {
		return x - y;
	};

	/**
	 * Multiplication method
	 * @param x
	 * @param y
	 * @returns {number}
	 */
	var multiplication = function(x, y) {
		return x * y;
	};

	/**
	 * Division Method
	 * @param x
	 * @param y
	 * @returns {number}
	 * @Throw Error
     */
	var division = function(x, y) {
		if(x === 0 || y === 0){
			throw new Error('Division by 0 not allowed.');
		}
		return x / y;
	};

	/**
	 * Math exponentiation Method
	 * @param base
	 * @param exponent
	 * @returns {number}
	 */
	var exponentiation = function(base, exponent) {
		return Math.pow(base, exponent);
	};

	/**
	 * Public methods
	 */
	return {
		sum: function(x, y) {
			return sum(x, y);
		},
		subtract: function(x, y) {
			return subtract(x, y);
		},
		multiplication: function(x, y) {
			return multiplication(x, y);
		},
		division: function(x, y) {
			return division(x, y)
		},
		exponentiation: function(x, y) {
			return exponentiation(x, y)
		}
	}
});
