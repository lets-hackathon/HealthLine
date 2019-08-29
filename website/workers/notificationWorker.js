'use strict';

const Reminder = require('../models/Reminder');

const notificationWorkerFactory = function() {
  return {
    run: function() {
      Reminder.sendNotifications();
    },
  };
};

module.exports = notificationWorkerFactory();