import { Injectable } from '@nestjs/common';
import { InputType } from './enums';
import { ReceiverService } from './receiver.service';

@Injectable()
export class ReceiverManagementService {
  constructor(private readonly receiverService: ReceiverService) {}

  async createInput(options:{
    name: string,
    type: InputType,
  }){

  }
}
