const mongoose=require('mongoose');
const DocProfileSchema=mongoose.Schema({
    user:[{
		type:mongoose.Schema.Types.ObjectId,
		ref:'users'
    }],
    hospital:[{
        type:mongoose.Schema.Types.ObjectId,
		ref:'hospitals'
    }],
    name:{
		type:String,
		required:true
    },
	email:{
		type:String,
		required:true,
		unique:true
    },
    phone:{
        type:String,
        required:true
    },
	password:{
		type:String,
		required:true
    },
    DocId:{
        type:String,
        unique:true,
        required:true
    },
	date:{
	type:Date,
	default: Date.now
}
});
module.exports=mongoose.model('docprofile',DocProfileSchema);