const express=require('express');
const connectDB=require('./config/db');
const path=require('path');
const roles = require("user-groups-roles");
const scheduler = require('./scheduler');

// const runReminder=require('./config/reminder');
const cors=require('cors');
const app=express();
//connect database
connectDB();

//run reminder
// runReminder();
const Reminder=require('./models/patient/Reminder');
//Init middleware
app.use(express.json({extended:false}));
app.use(cors());

//define routes


roles.createNewRole("patient");
roles.createNewRole("doctor");


//auth checked
app.use('/api/auth',require('./routes/auth'));

//profile checked
app.use('/api/patient/profile',require('./routes/patient/profile'));

//records checked
app.use('/api/patient/records',require('./routes/patient/records'));

//users checked
app.use('/api/users',require('./routes/users'));

// app.use('/api/patient/record',require('./routes/pa'))

//reminder route giving error
app.use('/api/patient/reminder',require('./routes/patient/reminder'));
console.log("tata");

app.use('/api/doctor/report',require('./routes/doctor/docreport.js'));



//interval


// serve static routes in production
if(process.env.NODE_ENV==='production'){
	//set static folder
	app.use(express.static('client/build'));
	app.get('*',(req,res)=>res.sendFile(path.resolve(__dirname,'client','build',
	'index.html')));
}

const PORT=process.env.PORT||5000;
app.listen(PORT,()=>{
	console.log("server is listening");
})
scheduler.start();