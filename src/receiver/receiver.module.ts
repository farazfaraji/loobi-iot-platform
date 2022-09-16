import { Module } from '@nestjs/common';
import { ReceiverManagementService } from './services/management.service';
import { ReceiverService } from './services/receiver.service';

@Module({
  imports: [],
  providers: [ReceiverService, ReceiverManagementService],
})
export class ReceiverModule {}
