const mongoose=require('mongoose');
const twilio = require('twilio'),
cronJob = require('cron').CronJob;
const Profile=require('../models/Profile');
const User=require('../models/User');
const Reminder=require('../models/Reminder');
const runReminder=async ()=>{
try {
    const reminders=Reminder.find();
    while(1){
        reminders.forEach((reminder)=>{
const {medname,hour,minute,message,user}=reminder;
//still not sure
const profile=await Profile.findOne({user});
const {phone}=profile;
            var client = new twilio('AC0d4961dac63293dbe8ebd199ed1a30cd', '96ef8666b0aff8a77aa9643985a93d8c'),
var textJob = new cronJob( `${minute} ${hour} * * *`, function(){
    client.messages.create( { to:`${phone}`, from:'+13345185869', body:`Hey there from HealthLine!,time to take your dose of ${medname}` }, function( err, data ) {});
  },  null, true);
        })
    }
    
} catch (error) {
    console.log("bro, you messed up");
}
};
module.exports=runReminder;