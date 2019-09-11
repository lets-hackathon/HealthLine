const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const roles = require("user-groups-roles");
const scheduler = require('./scheduler');
const fileupload=require("express-fileupload");
const cors = require('cors');
const app = express();

//connect database
connectDB();

//Init middleware
app.use(express.json({extended:false}));
app.use(cors()); //for cross origin requests
app.use(fileupload());//for express-fileupload

//define roles
roles.createNewRole("patient");
roles.createNewRole("doctor");

//auth routes
app.use('/api/auth',require('./routes/auth'));
app.use('/api/users',require('./routes/users'));

//patient routes
app.use('/api/patient/profile',require('./routes/patient/profile'));
app.use('/api/upload',require('./routes/upload.js'));
app.use('/api/patient/records',require('./routes/patient/records'));
app.use('/api/patient/reminder',require('./routes/patient/reminder'));

//doctor routes
app.use('/api/doctor/report',require('./routes/doctor/docreport.js'));

//ml route
app.use('/api/emotions',require('./routes/emotion.js'));

//hardcoded route for adding symptoms
app.use('/api/symptoms',require('./routes/symptoms.js'));
// serve static routes in production
if(process.env.NODE_ENV === 'production'){
	//set static folder
	app.use(express.static('client/build'));
	app.get('*',(req,res)=>res.sendFile(path.resolve(__dirname,'client','build','index.html')));
}

const PORT = process.env.PORT||5000;
app.listen(PORT,() => {
	console.log("server is listening");
})
//the function that runs cron job for reminders app
scheduler.start();
