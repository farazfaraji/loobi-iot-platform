import { Module } from '@nestjs/common';
import { ReceiverManagementService } from './services/management.service';
import { ReceiverService } from './services/receiver.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration, { validationSchema } from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema,
      envFilePath: [`./${process.env.NODE_ENV}.env`, `./.env`],
    }),
  ],
  providers: [ReceiverService, ReceiverManagementService],
})
export class ReceiverModule {}
