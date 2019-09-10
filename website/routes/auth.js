const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const PatientUser = require('../models/patient/PatientUser');
const DoctorUser = require('../models/doctor/DoctorUser');

// @route     GET api/auth
// @desc      Get logged in user
// @access    Private
router.get('/', auth, async (req, res) => {
  console.log("oopsie");

  try {
    console.log("hello frens");
    console.log(req.user.id);
      const patientUser = await PatientUser.findById(req.user.id).select('-password');  
      const doctorUser = await DoctorUser.findById(req.user.id).select('-password');
     if(patientUser){
      res.json(patientUser);
     }
     else if(doctorUser){
       res.json(doctorUser);
     }

  } catch (err) {
    console.log("oopsie");
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     POST api/auth
// @desc      Auth user & get token
// @access    Public
router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
    check('role','please select a role').exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password,role } = req.body;
    if(role=='patient'){
    try {
      console.log("patient auth");
      let patientUser = await PatientUser.findOne({ email });

      if (!patientUser) {
        return res.status(400).json({ msg: 'Invalid Credentials' });
      }

      const isMatch = await bcrypt.compare(password, patientUser.password);

      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid Credentials' });
      }

      const payload = {
        user: {
          id: patientUser.id
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
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
  else if(role=="doctor"){
    try {
      console.log("doctor auth");

      let doctorUser = await DoctorUser.findOne({ email });

      if (!doctorUser) {
        return res.status(400).json({ msg: 'Invalid Credentials' });
      }

      const isMatch = await bcrypt.compare(password, doctorUser.password);

      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid Credentials' });
      }

      const payload = {
        user: {
          id: doctorUser.id
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
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }

  }
}
);

module.exports = router;