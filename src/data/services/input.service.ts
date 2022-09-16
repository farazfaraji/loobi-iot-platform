import { InputDto } from '@loobi/dtos';
import { Injectable } from '@nestjs/common';
import { LoggerService } from 'src/libs/logger';
import { InputRepository } from '../repositories/input.repository';

@Injectable()
export class InputService {
  constructor(
    private readonly logger: LoggerService,
    private readonly inputRepository: InputRepository,
  ) {}

  async createInput(inputDto: InputDto) {
    this.logger.verbose('Call createInput', inputDto);
    await this.inputRepository.create(inputDto);
  }
}
