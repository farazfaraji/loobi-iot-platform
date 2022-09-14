import { Injectable } from '@nestjs/common';
import tls from 'tls';
import fs from 'fs';
import logging from 'aedes-logging';
import { Server } from 'aedes';
import { createServer } from 'aedes-server-factory';
import { ReceiverService } from './receiver.service';
import { LoggerService } from 'src/logger/logger.service';

@Injectable()
export class BrokerService {
  constructor(
    private readonly logger: LoggerService,
    private readonly receiverService: ReceiverService,
  ) {
    this.logger.setContext(BrokerService.name);
    // const options = {
    //   key: fs.readFileSync(__dirname + '/../../assets/private/private_key.pem'),
    //   cert: fs.readFileSync(__dirname + '/../../assets/private/public.pem'),
    // };
    const broker = Server();
    const server = createServer(broker);
    //const server = tls.createServer(options, broker.handle);

    // logging({
    //   instance: broker,
    //   servers: [server],
    // });

    server.listen(8883, () => {
      this.logger.debug('MQTT started and listening on port ', 8883);
      this.receiverService.listen();
    });
  }
}
