const notify = require('node-notifier');
const fs = require('fs');
const path = require('path');

const msgPath = path.join(__dirname,"message.json");
const msgJson = JSON.parse(fs.readFileSync(msgPath));
const reminderMessages = msgJson.messages;

const intervel = 15 * 60 * 1000


console.log("notify started..")
setInterval(() => {
    const index = Math.floor(Math.random()*reminderMessages.length);
    const msg = reminderMessages[index];
    console.log(msg);
    notify.notify({
      title: 'Health Reminder',
      message: msg,
      sound: true,
    });
}, intervel);