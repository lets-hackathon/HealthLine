// var twilio = require('twilio'),
// var client = new twilio('ACCOUNTSID', 'AUTHTOKEN'),
// cronJob = require('cron').CronJob;
// var numbers = ['YOURPHONENUMBER', 'YOURFRIENDSPHONENUMBER'];
// var textJob = new cronJob( '0 18 * * *', function(){
//     client.messages.create( { to:'YOURPHONENUMBER', from:'YOURTWILIONUMBER', body:'Hello! Hope you’re having a good day!' }, function( err, data ) {});
//   },  null, true);


//create reminder

const express=require('express');
const router=express.Router();
const auth=require('../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const Reminder=require('../models/Reminder');

//get reminder from /api/reminder
//private
router.get('/',auth,async (req,res)=>{
    try{ const reminder= await Reminder.findById({user:req.user.id});
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
    check('medname','Medicine Name is required').not().isEmpty(),
    check('hour','Hour is required').not().isEmpty(),
    check('minute','Minute is required').not().isEmpty(),

]],async (req,res)=>{
    const errors=validationResult(req);
	if(!errors.isEmpty()){
		return res.status(400).json({errors:errors.array() });
    }
    const {medname,hour,minute}=req.body;
	try{
		const newReminder=new Reminder({
            user:req.user.id,
            medname,
            hour,
            minute
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
