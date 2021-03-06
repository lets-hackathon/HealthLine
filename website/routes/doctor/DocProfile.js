const express=require('express');
const router=express.Router();
const auth=require('../../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const DoctorProfile=require('../models/doctor/DoctorProfile');

//@route Get api/doctorprofile
//@desc Get doctor profile
//@access Private
router.get('/',auth,async (req,res)=>{
try{
	const profile=await DoctorProfile.findById({user:req.user.id});
	res.json(profile);

} catch(err){
	console.error(err.message);
	res.status(500).send('Server Error');
}

});

//@route POST api/doctor/profile
//@desc Add profile
//@access Private
router.post('/',[auth,[
	check('name','Name is required').not().isEmpty()
]],async (req,res)=>{
	const errors=validationResult(req);
	if(!errors.isEmpty()){
		return res.status(400).json({errors:errors.array() });
	}
	const {name,email,phone,type}=req.body;
	try{
		const newProfile=new DoctorProfile({
            doctoruser:req.user.id,
            name,
            age,
            email,
            phone,
            RecordId
		});
		const profile=await newProfile.save();
		res.json(profile);
	}
	catch(err)
	{
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});


//@route PUT api/doctor/profile/:id
//@desc Update
//@access Private
router.put('/:id',auth,async (req,res)=>{
	const {name,
        age,
        avatar,
        email,
        address,
        phone,
        emergencyPhone,
        
        RecordId}=req.body;
	
	//build a profile
	const profileFields={};
    if(name) profileFields.name=name;
    if(age) profileFields.age=age;
    if(avatar) profileFields.avatar=avatar;
    if(email) profileFields.email=email;
    if(address) profileFields.address=address;
    if(phone) profileFields.phone=phone;
    if(emergencyPhone) profileFields.emergencyPhone=emergencyPhone;
	if(RecordId) profileFields.RecordId=RecordId;
	try{
		let profile=await DoctorProfile.findById(req.params.id);
		if(!profile) return res.status(404).json({msg:'Profile not found'});
		//make sure user owns profile
		if(profile.user.toString()!==req.user.id){
			return res.status(401).json({msg:'Not authorized'});
		}
		profile=await DoctorProfile.findByIdAndUpdate(req.params.id,
		{$set:profileFields},
		{new:true}
		);
		res.json(profile);
	}
	catch(err){
		console.error(err.message);
	res.status(500).send('Server Error');
	}
});

module.exports=router;