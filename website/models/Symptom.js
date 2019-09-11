const mongoose=require('mongoose');
const SymptomSchema=mongoose.Schema({
    name:{
		type:String,
		required:true
    }
});
module.exports=mongoose.model('symptom',SymptomSchema);