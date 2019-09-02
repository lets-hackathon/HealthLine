'use strict';

const Reminder = require('../models/patient/Reminder');

const notificationWorkerFactory = function() {
  return {
    run: function() {
      Reminder.sendNotifications();
    },
  };
};

module.exports = notificationWorkerFactory();