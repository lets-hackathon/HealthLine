const express=require('express');
const connectDB=require('./config/db');
const path=require('path');

const cors=require('cors');
const app=express();
//connect database
connectDB();

//Init middleware
app.use(express.json({extended:false}));
app.use(cors());

//define routes
app.use('/api/auth',require('./routes/auth'));
app.use('/api/profile',require('./routes/profile'));
app.use('/api/records',require('./routes/records'));
app.use('/api/users',require('./routes/users'));

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
