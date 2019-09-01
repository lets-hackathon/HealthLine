const mongoose=require('mongoose');

const DoctorReportSchema=mongoose.Schema({
//patient linking how
RecordId:{
type:String,
required:true,
unique:true
},
disease:{
    type:String,
    require:true
},
description:{
    type:String,
    required:true
},
prescription:{
    type:String,
    required:true
}
});
module.exports=mongoose.model("doctorreport",DoctorReportSchema);