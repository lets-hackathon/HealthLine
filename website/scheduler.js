'use strict';

const CronJob = require('cron').CronJob;
const notificationsWorker = require('./workers/notificationsWorker');
const moment = require('moment');
console.log("chai peelo");
const schedulerFactory = function() {
  console.log("oho");
  return {
    start: function() {
      console.log("woah");
      new CronJob('00 * * * * *', function() {
        console.log("mere dost");
        console.log('Running Send Notifications Worker for ' +
          moment().format());
        notificationsWorker.run();
      }, null, true, '');
    },
  };
};

module.exports = schedulerFactory();