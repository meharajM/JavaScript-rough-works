/*
	JavaScript program to demonstrate usage of compare function of sort function. 
	the array will be sorted on the basis of second digit in each element in ascending order if second digit is equal then,
	on the basis of first digit"

*/
var list = ['1589 2',"1003 1",'5858 3'];//['taskId priority', 'taskId priority']
list = list.sort(function(task1,task2){
	task1 = task1.trim().replace(/  +/g, ' ').split(' ');	
	var t1Id = task1[0];
	var t1P = task1[1];
	task2 = task2.trim().replace(/  +/g, ' ').split(' ');
	var t2Id = task2[0];
	var t2P = task2[1];
	var p = t1P - t2P;
	if(p == 0){
		return t1Id - t2Id;
	}else{
		return p;
	}	
});
console.log(list.map(function(a){return a.trim().replace(/  +/g, ' ').split(' ')[0]}));//showing the tasks accourding to priority or task
