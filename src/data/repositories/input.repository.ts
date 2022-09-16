import { InputDto } from '@loobi/dtos';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InputEntity } from '../entities/input.entity';

@Injectable()
export class InputRepository {
  constructor(
    @InjectRepository(InputEntity)
    private inputEntity: Repository<InputEntity>,
  ) {}

  async create(inputDto: InputDto): Promise<InputEntity> {
    inputDto.userId = '466b9e76-98ec-460d-a4b7-763c3b3c0645';
    inputDto.status = true;
    return await this.inputEntity.save(inputDto);
  }
}
