var list = ['1589   5',"1003 5",' 5858 5'];
list = list.sort(function(task1,task2){
	task1 = task1.trim().replace(/  +/g, ' ').split(' ');	
	//console.log(task1);
	var t1Id = task1[0];
	var t1P = task1[1];
	task2 = task2.trim().replace(/  +/g, ' ').split(' ');
	//console.log(task2);
	var t2Id = task2[0];
	var t2P = task2[1];
	var p = t1P - t2P;
	if(p == 0){
		return t1Id - t2Id;
	}else{
		return p;
	}	
});
console.log(list.map(function(a){return a.trim().replace(/  +/g, ' ').split(' ')[0]}));