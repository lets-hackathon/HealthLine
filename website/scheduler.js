'use strict';

const CronJob = require('cron').CronJob;
const notificationsWorker = require('./workers/notificationsWorker');
const moment = require('moment');
console.log("scheduler js online");
const schedulerFactory = function() {
  return {
    start: function() {
      console.log("starter function working");
      new CronJob('00 * * * * *', function() {
        // console.log("mere dost");
        // console.log('Running Send Notifications Worker for ' +
        //   moment().format());
        notificationsWorker.run();
      }, null, true, '');
    },
  };
};

module.exports = schedulerFactory();