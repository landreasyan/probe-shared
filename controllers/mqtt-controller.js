const mqtt = require('mqtt');

class MqttClient  {

  constructor() {
      this.client = null;
  }

  async connect() {

      return new Promise(async (resolve, reject) => {

        if (this.client) {
          console.log('Already connected.');
          resolve(this.client);
          return;
        }

        let client  = mqtt.connect('mqtt://localhost')
 
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


