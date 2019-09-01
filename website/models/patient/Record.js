const mongoose=require("mongoose");
const RecordSchema=mongoose.Schema({

    user:{
		type:mongoose.Schema.Types.ObjectId,
		ref:'users'
    },
    subjectId:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now()
    }
});
module.exports=mongoose.model('record',RecordSchema);