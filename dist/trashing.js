// var findRemoveSync = require('find-remove')

// findRemoveSync(__dirname + '/dist/trash', {age: {seconds: 60}});

// setInterval(findRemoveSync.bind(this,__dirname + '/dist/trash', {age: {seconds: 60}}), 120)

const fs = require('fs');
const path = require('path');

const directory = '/Users/awijesinghe/Development/research/record-video1/dist/trash';

var CronJob = require('cron').CronJob;

try{


new CronJob('* * * * * *', function() {
    // start of deleting folder content
    fs.readdir(directory, (err, files) => {
        if (err) throw err;
      
        for (const file of files) {
          fs.unlink(path.join(directory, file), err => {
            if (err) throw err;
          });
        }
      });
        // end of deleting folder content
  console.log('deleted');

}, null, true, 'America/Los_Angeles');

}catch(ex)
{
    console.log('Invalid cron pattern added. please check and re enter');
}
// Once you run this js it will run as a thread untill you stop it. 

/**
 * Important things you should know about cron shedule
 * read bellow url details. 
 * https://www.npmjs.com/package/node-cron
 * 
 * Allowed fields
 # ┌────────────── second (optional)
 # │ ┌──────────── minute
 # │ │ ┌────────── hour
 # │ │ │ ┌──────── day of month
 # │ │ │ │ ┌────── month
 # │ │ │ │ │ ┌──── day of week
 # │ │ │ │ │ │
 # │ │ │ │ │ │
 # * * * * * *
Allowed values
field	value
second	0-59
minute	0-59
hour	0-23
day of month	1-31
month	0-11 (or names)
day of week	0-6 (or names, 1 or 7 are sunday)

 for example   '00 30 11 * * 1-5'   this cron shedule will run every Monday(0) to friday(5) at 11:30:00 AM
 if you want to delete all content at the end of the month mid night , then your cron schedule will be 
 '00 00 00 31 * *'
 */