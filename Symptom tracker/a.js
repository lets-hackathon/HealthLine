var std = require("./data.json") //symptoms to diseases
var dtc = require("./tosort.json") //diseases to count

var x= new Object()

//creating an object containing diseases as keys and values as 0
stdkey=Object.keys(std)
// console.log(stdkey)
for (var i in stdkey){
	// console.log(stdkey[i])
	// console.log(std[stdkey[i]])
	for (var j in std[stdkey[i]]){
		// console.log(x[std[stdkey[i]][j]])
		x[std[stdkey[i]][j]]=0
	}
}

//stdin is the input symptoms

//to read the input from a json file
// var input = require("./currentSymptoms.json")
// var stdin=input["symptom"]
// for (var i in stdin){
// 	x[stdin[i]]+=1
// }
var stdin=[]
for (var i in stdkey){
	stdin.push(stdkey[i])
}
console.log(stdin)
//incrementing the values of occurences
for (var i in stdin){
	// console.log(stdin[i])
	x[stdin[i]]+=1
}

//to know the no. of symptom matches of each disease
// for (var i in x){
// 	console.log(x[i])
// }

//to predict by symptoms
var dis= Object.keys(x)
// console.log(dis)
var max=0
var pred=[]
for (var i in dis){
	if (x[dis[i]]>max){
		max=x[dis[i]]
		var pred=[]
		pred.push(dis[i])
	}
	else if(x[dis[i]]==max){
		pred.push(dis[i])
	}
	else{
		continue
	}
}

var old=Array.from(pred)

//to sort predictions by count
pred.sort(function(a,b){return dtc[b]-dtc[a]})

console.log(old==pred)