const mongoose=require('mongoose');
const SelectedSchema=mongoose.Schema({
    name:{
    type:String
      }
});
module.exports=mongoose.model('selects',SelectedSchema);