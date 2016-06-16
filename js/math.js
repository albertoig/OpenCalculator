/**
 * Math Library
 * @type {Function}
 */
var mathLibrary = (function() {

	/**
	 * Type of operators and their preference
	 */
	var operators = {
		"^": {
			precedence: 4,
			associativity: "Right"
		},
		"/": {
			precedence: 3,
			associativity: "Left"
		},
		"*": {
			precedence: 3,
			associativity: "Left"
		},
		"+": {
			precedence: 2,
			associativity: "Left"
		},
		"-": {
			precedence: 2,
			associativity: "Left"
		}
	};

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
	 * Clean string operation
	 * @param operation
	 * @returns {*}
     * @private
     */
	var _clean = function(operation) {
		for(var i = 0; i < operation.length; i++) {
			if(operation[i] === "") {
				operation.splice(i, 1);
			}
		}
		return operation;
	};

	/**
	 * change normal string operation to polish notation string
	 */
	var infixToPostfix = function(infix) {
		var outputQueue = "";
		var operatorStack = [];

		infix = infix.replace(/\s+/g, "");
		infix = _clean(infix.split(/([\+\-\*\/\^\(\)])/));

		for(var i = 0; i < infix.length; i++) {
			var token = infix[i];
			if(_isNumeric(token)) {
				outputQueue += token + " ";
			} else if("^*/+-".indexOf(token) !== -1) {
				var o1 = token;
				var o2 = operatorStack[operatorStack.length - 1];
				while("^*/+-".indexOf(o2) !== -1 && ((operators[o1].associativity === "Left" && operators[o1].precedence <= operators[o2].precedence) || (operators[o1].associativity === "Right" && operators[o1].precedence < operators[o2].precedence))) {
					outputQueue += operatorStack.pop() + " ";
					o2 = operatorStack[operatorStack.length - 1];
				}
				operatorStack.push(o1);
			} else if(token === "(") {
				operatorStack.push(token);
			} else if(token === ")") {
				while(operatorStack[operatorStack.length - 1] !== "(") {
					outputQueue += operatorStack.pop() + " ";
				}
				operatorStack.pop();
			}
		}

		return _addSpaces(operatorStack,outputQueue);
	};

	/**
	 * Add spaces from stack
	 * @param stack
	 * @param output
 	 * @returns {string}
     * @private
     */
	var _addSpaces = function(stack, output) {
		var outputQueue = output;

		while(stack.length > 0) {
			outputQueue += stack.pop() + " ";
		}
		return outputQueue.trim();
	};

	/**
	 * Check if character is numeric
	 * @param character
	 * @returns {boolean}
     * @private
     */
	var _isNumeric = function(character) {
		return !isNaN(parseFloat(character)) && isFinite(character);
	};

	/**
	 * Polish notation technique to resolve math operations
	 * @param postfix
	 * @returns {*}
     */
	var reversePolishNotation = function(postfix) {
		var resultStack = [];
		postfix = postfix.split(" ");
		for(var i = 0; i < postfix.length; i++) {
			if(_isNumeric(postfix[i])) {
				resultStack.push(postfix[i]);
			} else {
				var x = resultStack.pop();
				var y = resultStack.pop();

				resultStack.push(
					_operate(postfix[i], x, y)
				);
			}
		}

		if(resultStack.length > 1) {
			return "error";
		} else {
			return resultStack.pop();
		}
	};

	/**
	 * Operate numbers x and y with selected operation
	 * @param operation
	 * @param x
	 * @param y
	 * @returns Number
     * @private
     */
	var _operate = function(operation, x, y){
		x = parseInt(x);
		y = parseInt(y);

		if(operation === "+") {
			return sum(x, y);
		} else if(operation === "-") {
			return subtract(x, y);
		} else if(operation === "*") {
			return multiplication(x, y);
		} else if(operation === "/") {
			return division(x, y);
		} else if(operation === "^") {
			return exponentiation(x, y);
		}
	};

	/**
	 * Caalculate normal operation, first convert to polish notation, Latter will calculate it.
	 * @param operations
	 * @returns Number
     */
	var calculate = function(operations) {
		var output = infixToPostfix(operations);
		return reversePolishNotation(output);
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
		},
		infixToPostfix: function(operations) {
			return infixToPostfix(operations);
		},
		reversePolishNotation: function(postFix) {
			return reversePolishNotation(postFix);
		},
		calculate: function(operations) {
			return calculate(operations);
		}
	}
});
