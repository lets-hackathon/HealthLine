const mongoose=require('mongoose');
const config=require('config');
const twilioAccountSid=config.get('twilioAccountSid');
const twilioAuthToken=config.get('twilioAuthToken');
const twilioPhoneNumber=config.get('twilioPhoneNumber');
const moment=require('moment');
const Twilio = require('twilio');

const User=require('./PatientUser');
const ReminderSchema=mongoose.Schema({
user:{
    type:mongoose.Schema.Types.ObjectId,
    
},
phoneNumber:{
    type:String
},
medname:{
    type:String,
    required:true
},
notification:{
    type:String
},
message:{
    type:String,
    default:""
},
timeZone:String,
time:{type:Date,index:true}
});
ReminderSchema.methods.requiresNotification = function(dater) {
    console.log(dater);
    this.time.setDate(dater.getDate());
    this.time.setFullYear(dater.getFullYear());
    this.time.setMonth(dater.getMonth());
    console.log(this.time);
    console.log(Math.abs(Math.round(moment.duration(moment(this.time).tz(this.timeZone).utc()
    .diff(moment(dater).utc())
  ).asMinutes())));
  console.log(this.notification);
    return Math.abs(Math.round(moment.duration(moment(this.time).tz(this.timeZone).utc()
                            .diff(moment(dater).utc())
                          ).asMinutes())) == this.notification;

  };
  
  ReminderSchema.statics.sendNotifications = function(callback) {
    // now
    const searchDate = new Date();
    Reminder
      .find()
      .then(async reminders=> {
        reminders = await reminders.filter(function(reminder) {
                return reminder.requiresNotification(searchDate);
        });
        console.log(reminders);
        if (reminders.length > 0) {
            console.log("yippee");
          sendNotifications(reminders);
        }
      });
         /**
    * Send messages to all appoinment owners via Twilio
    * @param {array} appointments List of appointments.
    */
    function sendNotifications(reminders) {
        const client = new Twilio(process.env.TWILIO_ACCOUNT_SID,process.env.TWILIO_AUTH_TOKEN);
        reminders.forEach(function(reminder) {
            console.log(reminder.phoneNumber);
            // Create options to send the message
            const options = {
                to: "+917042108467",
                from: twilioPhoneNumber,
                /* eslint-disable max-len */
                body: ` ${reminder.message}`,
                /* eslint-enable max-len */
            };

            // Send the message!
            client.messages.create(options, function(err, response) {
                if (err) {
                    // Just log it for now
                    console.error(err);
                } else {
                    // Log the last few digits of a phone number
                    // let masked = reminder.phoneNumber.substr(0,
                    //     reminder.phoneNumber.length - 5);
                    // masked += '*****' ${masked};
                    console.log(`Message sent to me`);
                }
            });
        });

        // Don't wait on success/failure, just indicate all messages have been
        // queued for delivery
        if (callback) {
          callback.call();
        }
    }
};
const Reminder=mongoose.model('reminder',ReminderSchema);

module.exports=Reminder;