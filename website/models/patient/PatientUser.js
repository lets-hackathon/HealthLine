const mongoose=require('mongoose');
const PatientUserSchema=mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	email:{
		type:String,
		required:true,
		unique:true
	},
	password:{
		type:String,
		required:true
	},
	date:{
	type:Date,
	default: Date.now
},
role:{
	type:String,
	default:"patient",
	required:true
}
});
module.exports=mongoose.model('patientuser',PatientUserSchema);