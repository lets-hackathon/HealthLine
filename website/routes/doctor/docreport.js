const express=require('express');
const router=express.Router();
const auth=require('../../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const DoctorReport=require('../../models/doctor/DoctorReport');
const PatientUser=require('../../models/patient/PatientUser');
const PatientProfile=require('../../models/patient/PatientProfile');


//@route Get api/doctor/reports
//@desc Get all doctor reports
//@access Private
router.get('/',auth,async (req,res)=>{
try{
	const report=await DoctorReport.find({patientuser:req.user.id});
	res.json(report);

} catch(err){
	console.error(err.message);
	res.status(500).send('Server Error');
}

});

//@route POST api/record
//@desc Add profile
//@access Private
router.post('/',[auth,[
	check('RecordId','RecordId is required').not().isEmpty()
]],async (req,res)=>{
	const errors=validationResult(req);
	if(!errors.isEmpty()){
		return res.status(400).json({errors:errors.array() });
	}
    const {RecordId,disease,description,prescription}=req.body;
    console.log(RecordId);
	try{
        const user=await PatientProfile.findOne({RecordId:RecordId});
        const {name}=user;
        console.log(name);
		const newReport=new DoctorReport({
            disease,
            description,
            prescription,
            patientuser:user.patientuser,
            doctoruser:req.user.id
        });
        
		const report=await newReport.save();
		res.json(report);
	}
	catch(err)
	{
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});


module.exports=router;