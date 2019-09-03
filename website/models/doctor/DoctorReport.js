const mongoose=require('mongoose');

const DoctorReportSchema=mongoose.Schema({
//patient linking how
doctoruser:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'doctoruser'
  },
patientuser:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'patientuser'
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