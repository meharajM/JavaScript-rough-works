var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var numbers = {
		'M' : 1000,
		'CM': 900,
		'D' : 500,
		'CD': 400,
		'C'	: 100,
		'XC': 90,
		'L'	: 50,
		'XL': 40,
		'X' : 10,
		'IX': 9,
		'V' : 5,
		'IV': 4,
		'I' : 1	
	};
var getNumber = function(num){
	if(num.length == 1){
		return numbers[num];
	}else{
		return num.split('').map(function(num1){ 
			return getNumber(num1)}).reverse().reduce(function(s,n){return s - n > 0 ? s - n : s + n});
	}
	
}
var getRoman = function(num){
	var roman = '';
	for(var i in numbers){
		while(num >= numbers[i]){
			roman += i;
			num -= numbers[i];
		}
		// if(numbers[i] == num){
		// 	return i;
		// }
	}
	return roman;
}
exports.evaluate = function(num1, num2, op){
	var num1 = getNumber(num1);
	//console.log(num1);
	var num2 = getNumber(num2);
	//console.log(num2);
	var result;
	switch (op){
		case '+' : result = num1 + num2;
					break;
		case '-' : result = num1 - num2;
					break;
		case '*' : result = num1 * num2;
					break;
		case '/' : result = num1 / num2;
	}
	
	//console.log(getRoman(result));
	return getRoman(result);
}

rl.question("Enter : Number1 Operation Number2 : ", function(expression) {
   expression = expression.split(' ');
   console.log(expression[0], expression[1], expression[2] + " = "+ evaluate(expression[0], expression[2], expression[1]));   
   rl.close();
});
