const express=require('express');
const router=express.Router();
const auth=require('../../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const PatientProfile=require('../../models/patient/PatientProfile');
const PatientUser=require('../../models/patient/PatientUser');

//@route Get api/patient/profile
//@desc Get patient profile
//@access Private
router.get('/',auth,async (req,res)=>{
try{
	const profile=await PatientProfile.findOne({patientuser:req.user.id});
	res.json(profile);

} catch(err){
	console.error(err.message);
	res.status(500).send('Server Error');
}

});

//@route POST api/profile
//@desc Add profile
//@access Private
router.post('/',[auth,[
	check('address','Address is required').not().isEmpty()
]],async (req,res)=>{
	const errors=validationResult(req);
	if(!errors.isEmpty()){
		return res.status(400).json({errors:errors.array() });
	}
	const {phone,age,avatar,address,emergencyPhone,RecordId}=req.body;
	const patient=await PatientUser.findById(req.user.id);
	try{
		const newProfile=new PatientProfile({
            patientuser:req.user.id,
            name:patient.name,
            age,
            avatar,
            email:patient.email,
            address,
            phone,
            emergencyPhone,
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


//@route PUT api/patient/profile/:id
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
		const use={};
		if(name) use.name=name;
		if(email) use.email=email;

	//build a profile
	const profileFields={};
    if(age) profileFields.age=age;
    if(avatar) profileFields.avatar=avatar;
    if(address) profileFields.address=address;
    if(phone) profileFields.phone=phone;
    if(emergencyPhone) profileFields.emergencyPhone=emergencyPhone;
	if(RecordId) profileFields.RecordId=RecordId;
	if(name) profileFields.name=name;
	if(email) profileFields.email=email;

	try{
		let profile=await PatientProfile.findById(req.params.id);
		if(!profile) return res.status(404).json({msg:'Profile not found'});
		//make sure user owns profile
		if(profile.patientuser.toString()!==req.user.id){
			return res.status(401).json({msg:'Not authorized'});
		}
		user=await PatientUser.findByIdAndUpdate(req.user.id,
			{$set:use},
			{new:true});
		profile=await PatientProfile.findByIdAndUpdate(req.params.id,
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