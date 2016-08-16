var expect = require("chai").expect;
var sortTask = require("../sortTask");
describe("priority task sorting",function(){
	it("sorts tasks based on priority then id",function(){
		var list = ['1589 3',"1003 2",'5858 1'];//['taskId priority', 'taskId priority']
		var sorted = sortTask.sortTask(list);
		expect(sorted).to.deep.equal(["5858","1003","1589"]);
	});
});