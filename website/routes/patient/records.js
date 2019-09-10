const express=require('express');
const router=express.Router();
const auth=require('../../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const User=require('../../models/patient/PatientUser');
const Record=require('../../models/patient/Record');

//@route Get api/records
//@desc Get all records
//@access Private
router.get('/',auth,async (req,res)=>{
try{
	const records=await Record.find({user:req.user.id}).sort({date:-1});
	res.json(records);

} catch(err){
	console.error(err.message);
	res.status(500).send('Server Error');
}

});

//@route POST api/records
//@desc Add new record
//@access Private
router.post('/',[auth,[
	check('image','image link is required').not().isEmpty()
]],async (req,res)=>{
	const errors=validationResult(req);
	if(!errors.isEmpty()){
		return res.status(400).json({errors:errors.array() });
	}
	const {subjectId,description,image}=req.body;
	try{
		const newRecord=new Record({
			subjectId,
			image,
			description,
			user:req.user.id
		});
		const record=await newRecord.save();
		console.log("upload record successful");
		res.json(record);
	}
	catch(err)
	{
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});


//@route PUT api/records/:id
//@desc Update
//@access Private
router.put('/:id',auth,async (req,res)=>{
	const {link,subjectId,description}=req.body;
	
	//build a record
	const recordFields={};
	if(link) recordFields.link=link;
	if(subjectId) recordFields.subjectId=subjectId;
	if(description) recordFields.description=description;
	try{
		let record=await Record.findById(req.params.id);
		if(!record) return res.status(404).json({msg:'Record not found'});
		//make sure user owns record
		if(record.user.toString()!==req.user.id){
			return res.status(401).json({msg:'Not authorized'});
		}
		record=await Record.findByIdAndUpdate(req.params.id,
		{$set:recordFields},
		{new:true}
		);
		res.json(record);
	}
	catch(err){
		console.error(err.message);
	res.status(500).send('Server Error');
	}
});
//@route PUT api/records/:id
//@desc Update
//@access Private
router.delete('/:id',auth,async (req,res)=>{
try{
		let record=await Record.findById(req.params.id);
		if(!record) return res.status(404).json({msg:'Record not found'});	
	//make sure user owns record
	if(record.user.toString()!==req.user.id){
			return res.status(401).json({msg:'Not authorized'});
		}
		await Record.findByIdAndRemove(req.params.id);
	res.json("contact removed");
	}
	catch(err){
		console.error(err.message);
	res.status(500).send('Server Error');
	}
});
module.exports=router;