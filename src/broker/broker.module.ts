import { Global, Module } from '@nestjs/common';
import { LoggerModule } from 'src/logger/logger.module';
import { BrokerService } from './services/broker.service';
import { ReceiverService } from './services/receiver.service';

@Global()
@Module({
  imports: [LoggerModule],
  providers: [BrokerService, ReceiverService],
})
export class BrokerModule {}
