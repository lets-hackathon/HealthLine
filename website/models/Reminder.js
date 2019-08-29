const mongoose=require('mongoose');
const cfg = require('../config');

const ReminderSchema=mongoose.Schema({
user:{
    type:mongoose.Schema.Types.ObjectId,
    ref="users"
},
medname:{
    type:String,
    required:true
},
// hour:{
//     type:Number,
//     required:true
// },
// minute:{
//     type:Number,
//     required:true
// },
message:{
    type:String,
    default:""
},
timeZone:String,
time:{type:Date,index:true}
});

ReminderSchema.methods.requiresNotification = function(date) {
    return Math.round(moment.duration(moment(this.time).tz(this.timeZone).utc()
                            .diff(moment(date).utc())
                          ).asMinutes()) === this.notification;
  };
  
  ReminderSchema.statics.sendNotifications = function(callback) {
    // now
    const searchDate = new Date();
    Reminder
      .find()
      .then(function(reminders) {
        reminders = reminders.filter(function(reminder) {
                return reminder.requiresNotification(searchDate);
        });
        if (reminders.length > 0) {
          sendNotifications(reminders);
        }
      });
         /**
    * Send messages to all appoinment owners via Twilio
    * @param {array} appointments List of appointments.
    */
    function sendNotifications(appointments) {
        const client = new Twilio(cfg.twilioAccountSid, cfg.twilioAuthToken);
        appointments.forEach(function(appointment) {
            // Create options to send the message
            const options = {
                to: `+ ${appointment.phoneNumber}`,
                from: cfg.twilioPhoneNumber,
                /* eslint-disable max-len */
                body: `Hi ${appointment.name}. Just a reminder that you have an appointment coming up.`,
                /* eslint-enable max-len */
            };

            // Send the message!
            client.messages.create(options, function(err, response) {
                if (err) {
                    // Just log it for now
                    console.error(err);
                } else {
                    // Log the last few digits of a phone number
                    let masked = appointment.phoneNumber.substr(0,
                        appointment.phoneNumber.length - 5);
                    masked += '*****';
                    console.log(`Message sent to ${masked}`);
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

module.exports=mongoose.model('reminder',ReminderSchema);