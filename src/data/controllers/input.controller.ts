import { InputDto } from '@loobi/dtos';
import { Body, Controller, Post } from '@nestjs/common';
import { InputService } from '../services/input.service';

@Controller('data/input')
export class InputController {
  constructor(private readonly inputService: InputService) {}

  @Post()
  async createInput(@Body() inputDto: InputDto) {
    await this.inputService.createInput(inputDto);
    return { status: true };
  }
}
