const notify = require('node-notifier');

const intervel = 30 * 60 * 1000;

const reminderMessages = [
  "Time to stand up and take a short walk 🚶‍♂️",
  "Hey! Stretch your body for a minute 🧘‍♂️",
  "Sitting too long? Let’s move a bit!",
  "Quick reminder: walk around and refresh your mind 🌿",
  "Stand up, stretch, and relax your muscles 💪",
  "Time for a small break – your body will thank you!",
  "Look away from the screen and rest your eyes 👀",
  "Posture check! Sit straight or take a short walk",
  "Get up and move – even 2 minutes helps 😊",
  "Health reminder: stretch your legs and arms",
  "Take a deep breath and walk for a moment 🌬️",
  "Short walk time! Boost your energy 🚀",
  "Pause work, move your body, then come back stronger",
  "Reminder to hydrate 💧 and stretch",
  "Your future self says: take a break now 😄"
];

console.log("notify started..")
setInterval(() => {
    const index = Math.floor(Math.random()*10);
    const msg = reminderMessages[index];
    console.log(msg);
    notify.notify({
      title: 'Health Reminder',
      message: msg,
      sound: true,
    });
}, intervel);