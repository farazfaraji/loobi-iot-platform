const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://localhost:8883');

client.on('connect', function () {
    console.log("connected")
  client.subscribe('presence', function (err) {
    if (!err) {
      client.publish('presence', 'Hello mqtt');
    }
  });
});

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString());
  client.end();
});
