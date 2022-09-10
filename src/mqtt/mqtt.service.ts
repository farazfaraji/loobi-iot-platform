import { Injectable } from '@nestjs/common';
import * as tls from 'tls';
import * as fs from 'fs';
import * as logging from 'aedes-logging';
import { Server } from 'aedes';
import { createServer } from 'aedes-server-factory';

@Injectable()
export class MqttService {
  constructor() {
    const options = {
      key: fs.readFileSync(__dirname + '/../../assets/private_key.pem'),
      cert: fs.readFileSync(__dirname + '/../../assets/public.pem'),
    };
    const broker = Server();
    const server = createServer(broker);
    //const server = tls.createServer(options, broker.handle);

    logging({
      instance: broker,
      servers: [server],
    });

    server.listen(8883, function () {
      console.log('MQTT started and listening on port ', 8883);
    });
  }
}
