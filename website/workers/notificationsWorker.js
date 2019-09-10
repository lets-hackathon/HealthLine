'use strict';

const Reminder = require('../models/patient/Reminder');
//this is the function called by the cronjob 
const notificationWorkerFactory = function() {
  return {
    run: function() {
      Reminder.sendNotifications();
    },
  };
};

module.exports = notificationWorkerFactory();