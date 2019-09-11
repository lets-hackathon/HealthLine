const express=require("express");
const router=express.Router();
const Symptom=require('../models/Symptom.js');
router.get('/',async (req,res)=>{
    try{
        const symptoms=await Symptom.find();
        res.json(symptoms);
    
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
    
    });
module.exports=router;