require('dotenv').config();

const mqtt = require('mqtt');
const mqttHost = process.env.BROKER_HOST || 'localhost';
const mqttUser = process.env.MQTT_USER || null;
const mqttPass = process.env.MQTT_PASS || null; 

class MqttClient  {

  constructor() {
      this.client = null;
  }

  async connect() {

      return new Promise(async (resolve, reject) => {

        if (this.client) {
          resolve(this.client);
          return;
        }
        
        let options = {
          username:mqttUser,
          password:mqttPass
        };

        let client  = mqtt.connect('mqtt://'+ mqttHost, options)
 
        client.on('connect', () => {
                  this.client = client;
                  resolve(client);
        })

        client.on('error', (err) => {
                  console.log('Rejecting on error');
                  reject(err);
        })
        client.on('close', (err) => {
                  console.log('Rejecting on close');
                  reject(err);
        })
         

      });
  }
}

module.exports = new MqttClient();


