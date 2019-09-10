const express=require('express');
const router=express.Router();
const momentTimeZone = require('moment-timezone');
const moment = require('moment');
const auth=require('../../middleware/auth');
const { check, validationResult } = require('express-validator/check');
const PatientProfile=require("../../models/patient/PatientProfile");
const Reminder=require('../../models/patient/Reminder');
//get timezone from where reminder is being created
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
router.post('/',auth,async (req,res)=>{
   
	console.log("reminder adding");
	const patient=await PatientProfile.findOne({patientuser:req.user.id});
	console.log(patient);
	const {medname,message}=req.body;
	const time=moment(req.body.time, 'hh:mma');
	const timer=(time.toString());
	// time.local();
	// const timeZone=getTimeZones();
	try{
		const newReminder=new Reminder({
            user:req.user.id,
            medname,
			message,
			phoneNumber:patient.phone,
			time:timer,
			timeZone:"Asia/Kolkata",
			notification:"0"
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