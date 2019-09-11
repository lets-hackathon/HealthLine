const express=require('express');
const router=express.Router();
const Selected=require('../models/Selected');

//@route Get api/selectedsymps
//@desc Get all symps
//@access Private
router.get('/',async (req,res)=>{
try{
	const selects=await Selected.find();
	console.log(selects);
	res.json(selects);

} catch(err){
	console.error(err.message);
	res.status(500).send('Server Error');
}

});

//@route POST api/selectedsymps
//@desc Add new selected symptoms
//@access Private
router.post('/',async (req,res)=>{
	try{
		const newSelect=new Selected(req.body);
		
		const select=await newSelect.save();
		res.json(select);
	}
	catch(err)
	{
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});



//@route DELETE api/selectedsymps/:id
//@desc Update
//@access Private
router.delete('/:id',async (req,res)=>{
try{
		let select=await Selected.findById(req.params.id);
		if(!select) return res.status(404).json({msg:'Selected Item not found'});	
	
		await Selected.findByIdAndRemove(req.params.id);
	res.json("Selected Item removed");
	}
	catch(err){
		console.error(err.message);
	res.status(500).send('Server Error');
	}
});
module.exports=router;