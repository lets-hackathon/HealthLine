const mongoose=require('mongoose');
const SymptomSchema=mongoose.Schema({
    name:{
    type:String
      }
});
module.exports=mongoose.model('symptoms',SymptomSchema);