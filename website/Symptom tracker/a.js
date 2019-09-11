var std = require("./data.json.js") //symptoms to diseases
const Selected=require("../models/Symptom");
var dtc = require("./tosort.json.js") //diseases to count


const a=async ()=>{
	// const result=await 
const result=await Selected.find(); //this is the json object now in your function to be used as input
var x= new Object()

//creating an object containing diseases as keys and values as 0
for (var i in std){
	for (var j in std[i]){
		x[std[i][j]]=0
	}
}

//stdin is the input symptoms
var stdin=[std[0],std[10],std[20],std[2],std[13]]
//incrementing the values of occurences
for (var i in stdin){
	for (var j in stdin[i]){
		x[stdin[i][j]]+=1
	}
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
}
a();