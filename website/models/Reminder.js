const mongoose=require('mongoose');
const ReminderSchema=mongoose.Schema({
user:{
    type:mongoose.Schema.Types.ObjectId,
    ref="users"
},
medname:{
    type:String,
    required:true
},
hour:{
    type:Number,
    required:true
},
minute:{
    type:Number,
    required:true
}
});
module.exports=mongoose.model('reminder',ReminderSchema);