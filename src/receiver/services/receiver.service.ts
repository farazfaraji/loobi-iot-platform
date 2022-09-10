import { Injectable } from '@nestjs/common';
import * as mqtt from 'mqtt';
import { MqttClient } from 'mqtt';
//= 'mqtt://localhost:8883'
@Injectable()
export class ReceiverService {
  async create(options: {
    path: string;
    topic?: string;
    cb: Function;
  }): Promise<MqttClient> {
    const { path, topic, cb } = options;

    return new Promise(async (resolve, reject) => {
      const client = await mqtt.connect(path);
      client.on('connect', () => {
        if (topic) {
          this.subscribe({ client, topic });
        }
        client.on('message', () => cb);
        resolve(client);
      });
      client.on('error', (err) => {
        reject(err);
      });
    });
  }

  subscribe(options: { client: MqttClient; topic: string }) {
    const { client, topic } = options;
    client.subscribe(topic);
  }
}
