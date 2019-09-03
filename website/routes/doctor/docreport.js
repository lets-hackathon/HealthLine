const express=require('express');
const router=express.Router();
const auth=require('../../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const DoctorReport=require('../../models/doctor/DoctorReport');
const PatientUser=require('../../models/patient/PatientUser');
const PatientProfile=require('../../models/patient/PatientProfile');


//@route Get api/contacts
//@desc Get all users
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

//@route POST api/profile
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


//@route PUT api/contacts/:id
//@desc Update
//@access Private
// router.put('/:id',auth,async (req,res)=>{
// 	const {name,
//         age,
//         avatar,
//         email,
//         address,
//         phone,
//         emergencyPhone,
        
//         RecordId}=req.body;
	
// 	//build a profile
// 	const profileFields={};
//     if(name) profileFields.name=name;
//     if(age) profileFields.age=age;
//     if(avatar) profileFields.avatar=avatar;
//     if(email) profileFields.email=email;
//     if(address) profileFields.address=address;
//     if(phone) profileFields.phone=phone;
//     if(emergencyPhone) profileFields.emergencyPhone=emergencyPhone;
// 	if(RecordId) profileFields.RecordId=RecordId;
// 	try{
// 		let profile=await DoctorProfile.findById(req.params.id);
// 		if(!profile) return res.status(404).json({msg:'Profile not found'});
// 		//make sure user owns profile
// 		if(profile.user.toString()!==req.user.id){
// 			return res.status(401).json({msg:'Not authorized'});
// 		}
// 		profile=await DoctorProfile.findByIdAndUpdate(req.params.id,
// 		{$set:profileFields},
// 		{new:true}
// 		);
// 		res.json(profile);
// 	}
// 	catch(err){
// 		console.error(err.message);
// 	res.status(500).send('Server Error');
// 	}
// });

// // @route PUT api/contacts/:id
// // @desc Update
// // @access Private
// router.delete('/:id',auth,async (req,res)=>{
// try{
// 		let contact=await Contact.findById(req.params.id);
// 		if(!contact) return res.status(404).json({msg:'Contact not found'});	
// 	//make sure user owns contact
// 	if(contact.user.toString()!==req.user.id){
// 			return res.status(401).json({msg:'Not authorized'});
// 		}
// 		await Contact.findByIdAndRemove(req.params.id);
// 	res.json("contact removed");
// 	}
// 	catch(err){
// 		console.error(err.message);
// 	res.status(500).send('Server Error');
// 	}
// });
module.exports=router;