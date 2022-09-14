import { Injectable } from '@nestjs/common';
import { MqttClient, connect } from 'mqtt';
@Injectable()
export class ReceiverService {
  private client: MqttClient;

  async listen() {
    this.client = connect('mqtt://localhost:8883');
    this.client.on('connect', () => {
      this.subscribe();
    });
  }

  private async subscribe() {
    console.log('Connected to the Borker');
    this.client.subscribe('presence', (err) => {
      {
        if (!err) {
          this.client.on('message', this.receviedMessage);
          console.log('subscribe on ', 'presence');
        }
      }
    });
  }

  private async receviedMessage(topic: string, message: any) {
    console.log({ topic, message: message.toString() });
  }
}
