var result = 0;
function myCalculator(){
	function add(){
		var add = 0;
		for(var i = 0; i < arguments.length; i++){
			add += arguments[i];
		}
		return add;
	}

	function multiply(){
		var mult = 0;
		for(var i = 0; i < arguments.length; i++){
			mult *= arguments[i];
		}
		return mult;
	}

	function subtract(){
		var subtract = 0;
		for(var i = 0; i < arguments.length; i++){
			subtract -= arguments[i];
		}
		return subtract;
	}

	function divide(){
		var divide = 0;
		for(var i = 0; i < arguments.length; i++){
			divide /= arguments[i];
		}
		return divide;
	}

	return "add: " + add() + ", multiply: " + multiply()
	 + ", subtract: " + subtract() + ", divide: " + divide();
}

function fibonacci(num){
	var fib;
	var mean;
	if(num < 2){
		return 1;
	}

	fibonacci(i) = fibonacci(i-1) + fibonacci(n-2);
	
	mean += fib;
	console.log(fib);
	return fib;
}