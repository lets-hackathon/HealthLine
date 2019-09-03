const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator/check');

const PatientUser = require('../models/patient/PatientUser');
const DoctorUser =require('../models/doctor/DoctorUser');
// @route     POST api/users
// @desc      Regiter a user
// @access    Public

router.post('/',
  [
    check('name', 'Please add name').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('role','Please add a role').not().isEmpty(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password,role } = req.body;
    
      try {
      let user;
        if(role=="patient"){
           user = await PatientUser.findOne({ email });
  
          if (user) {
            return res.status(400).json({ msg: 'User already exists' });
          }
    
          user = new PatientUser({
            name,
            email,
            password,
            role
          });
        }else if(role=="doctor"){
           user = await DoctorUser.findOne({ email });
  
          if (user) {
            return res.status(400).json({ msg: 'User already exists' });
          }
    
          user = new DoctorUser({
            name,
            email,
            password,
            role
          });
        }
       
  
        const salt = await bcrypt.genSalt(10);
  
        user.password = await bcrypt.hash(password, salt);
  
        await user.save();
  
        const payload = {
          user: {
            id: user.id
          }
        };
  
        jwt.sign(
          payload,
          config.get('jwtSecret'),
          {
            expiresIn: 360000
          },
          (err, token) => {
            if (err) throw err;
            return res.json({ token });
          }
        );
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  
  
);

module.exports = router;