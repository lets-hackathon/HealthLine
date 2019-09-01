const mongoose=require('mongoose');

const MyReportSchema=mongoose.Schema({
    doctorReport:{
		type:mongoose.Schema.Types.ObjectId,
		ref:'doctorReport'
	}
});

module.exports=mongoose.model('myreport',MyReportSchema);