const express = require('express');
const router = express.Router();
//config for cloudinary
var cloudinary = require('cloudinary');
cloudinary.config({ 
  cloud_name: 'kanishkpersonalcloud', 
  api_key: 563687546449992, 
  api_secret: "XKrLHOSKYp1zkb4WXzsTLWFheVs"
});

router.post('/',(req,res)=>{
  if(req.files===null){
      return res.status(400).json({msg:'No file upload'});
  }

  const file=req.files.file;
  //express fileupload creating a path for storage
  file.mv(`${__dirname}/../client/public/uploads/${file.name}`,err=>{
      if(err){
          console.error(err);
          return res.status(500).send(err);
      }
      //cloudinary storing image into database and prociding url
      cloudinary.uploader.upload(`${__dirname}/../client/public/uploads/${file.name}`, function(result) {
        // add cloudinary url for the image to Recordform
        var image = result.secure_url;
        console.log("image uploaded to cloudinary");
        console.log(image);       
        res.json(image);    
      });
  })
})
module.exports = router;