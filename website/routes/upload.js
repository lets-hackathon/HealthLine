const express = require('express');
const router = express.Router();
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
  file.mv(`${__dirname}/../client/public/uploads/${file.name}`,err=>{
      if(err){
          console.error(err);
          return res.status(500).send(err);
      }
      // res.json({fileName:file.name,filePath:`/uploads/${file.name}`});

      cloudinary.uploader.upload(`${__dirname}/../client/public/uploads/${file.name}`, function(result) {
        // add cloudinary url for the image to the campground object under image property
        var image = result.secure_url;
        console.log("done");
        console.log(image);       
        res.json(image);    
      });
  })
})
module.exports = router;