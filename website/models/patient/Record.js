const mongoose=require("mongoose");
const RecordSchema=mongoose.Schema({

    user:{
		type:mongoose.Schema.Types.ObjectId,
		ref:'users'
    },
    image:{
        type:String
    },
    subjectId:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    date:{
        type:String,
    }
});
module.exports=mongoose.model('record',RecordSchema);