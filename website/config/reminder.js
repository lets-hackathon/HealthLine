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
            var client = new twilio('TWILIO_ACCOUNT_SID', 'TWILIO_AUTH_TOKEN'),
var textJob = new cronJob( `${minute} ${hour} * * *`, function(){
    client.messages.create( { to:`${phone}`, from:'TWILIO_PHONE_NUMBER', body:`Hey there from HealthLine!,time to take your dose of ${medname}` }, function( err, data ) {});
  },  null, true);
        })
    }
    
} catch (error) {
    console.log("bro, you messed up");
}
};
module.exports=runReminder;