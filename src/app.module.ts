import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BrokerModule } from './broker/broker.module';
import { DataModule } from './data/data.module';
import { LoggerModule } from './logger/logger.module';
import { ReceiverModule } from './receiver/receiver.module';

@Module({
  imports: [BrokerModule, ReceiverModule, LoggerModule, DataModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
