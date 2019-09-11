const express=require("express");
const router=express.Router();
const Symptom=require('../models/Symptom.js');
router.post('/',async (req,res)=>{
const {name}=req.body;
try{
    const newSymptom=new Symptom({
        name
    });
    const symptom=await newSymptom.save();
    res.json(symptom);
}
catch(err)
{
    console.error(err.message);
    res.status(500).send('Server Error');
}
});