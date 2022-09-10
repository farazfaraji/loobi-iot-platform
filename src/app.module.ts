import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MqttModule } from './mqtt/mqtt.module';
import { ReceiverModule } from './receiver/receiver.module';

@Module({
  imports: [MqttModule, ReceiverModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
