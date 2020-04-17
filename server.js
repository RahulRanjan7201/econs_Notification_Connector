// Intergret in Core Backend API when you want to trigger any Notification for Now Its only email
const mqtt = require("mqtt");
const client = mqtt.connect('mqtt://192.168.1.4', {
  port:  1883
});

client.on('connect', function() {
  console.log('Notification Client is connected');
  Notification.sendEmail();
});
 const Notification = {
     //to, subject, templateName, data,file - send as parameter
  sendEmail: () => {
    client.publish(
      'email',
      JSON.stringify({
        to: ["rahul.ranjan7201@gmail.com"],
        templateName: "prescription",
        data: {"name":"Rahul","data" :"This is dummy data and now where related ... i don't know what i am typing"},
        subject: "Your Prescription"
      }),
      {
        qos: 2
      }
    );
  }
};
