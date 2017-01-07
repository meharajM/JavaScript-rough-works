var expect = require("chai").expect;
var romanEarthmetics = require("../romanEarthmetics.js");
describe("Roman numerics earthmetics",function(){
	it("performing erthmetic operations on roman numerics",function(){
		var testCases = [			//each elemenent is a test case 
							['XL','+','X','L'], //[num1,op,num2,expected result]
							['C','-','I','XCIX'],
							['C','/','X','X'],
							['X','*','X','C'],
							['I','+','V','IV']
						];
		
		for(var i = 0; i < testCases.length; i++){
			var testCase = testCases[i];
			var num1 = testCase[0];
			var num2 = testCase[2];
			var op = testCase[1];
			var result = testCase[3];
			var answer = romanEarthmetics.evaluate(num1, num2, op);
			expect(answer,'Failed test case no:'+parseInt(i+1)+" ").to.equal(result);
		}
	});
});