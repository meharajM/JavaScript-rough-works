a = [4,1,2,8,5,0,3,6]
a.sort(function(a,b){
	if(a % 2 == 0 || b % 2 != 0){
		console.log(a,b);
		return -1;
	}else if(b % 2 == 0 || a % 2 != 0 ){
		console.log(a,b);
		return 1;
	}	
});
console.log(a);