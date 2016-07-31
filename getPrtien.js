// Javascript program to read an integer from STDIN and output it to STDOUT

// Read the variable from STDIN
const http = require('http');
var getNbdNo = function(food){
	var url = 'http://api.nal.usda.gov/ndb/search/?format=json&q='+food+'&sort=n&max=25&offset=0&api_key=QEjokUl32fsgxSzpP0G6FazFz843HM88dtuMvIMx';
	
	http.get(url,function(res) {
		var response1 = "";
		res.on('data', function(d) {
			//process.stdout.write("-");
			response1 += d;	      
		});	
		res.on('end',function(){
			d = JSON.parse(response1);
			if(d.list && d.list.item && d.list.item[0].ndbno){
		      	var ndbno = d.list.item[0].ndbno;
		      	process.stdout.write("ndbno : "+ndbno);
		      	var url2 = "http://api.nal.usda.gov/ndb/reports/?ndbno="+ndbno+"&type=f&format=json&api_key=QEjokUl32fsgxSzpP0G6FazFz843HM88dtuMvIMx";
		      	http.get(url2,function(res1){
		      		var response2 = "";		      	
		      		res1.on('data',function(data){	
		      			//process.stdout.write("-");
		      			response2 += data;		      			
		      		});
		      		res1.on('end',function(){
		      			response2 = JSON.parse(response2);
		      			var nutrients = response2.report.food.nutrients;
		      			for(var i in nutrients){
		      				var nutrient = nutrients[i];
		      				if(nutrient.nutrient_id == 203){
		      					process.stdout.write(nutrient.value+"g");
		      				}
		      			}
		      		});
		      		res1.on('error',function(e){
		      		    process.stdout.write(e);
		      		});
		      	}).on('error',function(e){
		      		console.log("error 2 : "+ e);
		      	});
		    }
		});	
	}).on('error',function(e) {
			console.log("error : "+e);
	});
}


var input;
process.stdin.on('data', function(chunk) {
    process.stdout.write(chunk);
    getNbdNo(chunk);
});
