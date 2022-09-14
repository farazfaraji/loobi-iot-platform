import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BrokerModule } from './broker/broker.module';
import { ReceiverModule } from './receiver/receiver.module';
import { LoggerModule } from './logger/logger.module';

@Module({
  imports: [BrokerModule, ReceiverModule, LoggerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
