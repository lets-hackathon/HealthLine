const express = require('express');
const router = express.Router();
const Predict=require("../ml/predict");

router.get("/",async (req,res)=>{
const response=await Predict();
console.log(response);
// const x={hello:"heya"};
 res.json(response);
});
module.exports = router;
