const express = require('express');
const router = express.Router();
const Tracker=require("../Symptom tracker/a");

router.get("/",async (req,res)=>{
const response=await Tracker();
console.log(response);
 res.json(response);
});
module.exports = router;