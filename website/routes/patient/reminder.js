const express=require('express');
const router=express.Router();
const momentTimeZone = require('moment-timezone');
const moment = require('moment');
const auth=require('../../middleware/auth');
const { check, validationResult } = require('express-validator/check');
const PatientProfile=require("../../models/patient/PatientProfile");
const Reminder=require('../../models/patient/Reminder');

const getTimeZones = function() {
	return momentTimeZone.tz.names();
  };
//get reminder from /api/reminder
//private
router.get('/',auth,async (req,res)=>{
    try{ 
	const reminder= await Reminder.find({user:req.user.id});
    res.json(reminder);
}
catch(err){
    console.error(err.message);
	res.status(500).send('Server Error');
}
   
})

//POST add reminder
//private
router.post('/',[auth,[
    check('medname','Medicine Name is required').not().isEmpty()

]],async (req,res)=>{
    const errors=validationResult(req);
	if(!errors.isEmpty()){
		return res.status(400).json({errors:errors.array() });
	}
	const patient=await PatientProfile.find({patientuser:req.user.id});
	const {medname,message,timeZone}=req.body;
	time=moment(req.body.time, 'MM-DD-YYYY hh:mma');
	// const timeZone=getTimeZones();
	
	try{
		const newReminder=new Reminder({
            user:req.user.id,
            medname,
			message,
			phoneNumber:patient.phone,
			time,
			timeZone
		});
		const reminder=await newReminder.save();
		res.json(reminder);
	}
	catch(err)
	{
		console.error(err.message);
        res.status(500).send('Server Error');
        
	}
    
})

//delete reminder
//private
router.delete("/:id",auth,async (req,res)=>{
try {
    let reminder=await Reminder.findById(req.params.id);
    if(!reminder) return res.status(404).json({msg:'Reminder not found'});	
	//make sure user owns contact
	if(reminder.user.toString()!==req.user.id){
			return res.status(401).json({msg:'Not authorized'});
		}
		await Reminder.findByIdAndRemove(req.params.id);
	res.json("Reminder removed");

} catch (err) {
    console.error(err.message);
	res.status(500).send('Server Error');
}
})
module.exports=router;