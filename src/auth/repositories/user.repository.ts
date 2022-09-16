import { UserProfileDto } from '@loobi/dtos';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async create(userProfileDto: UserProfileDto): Promise<UserEntity> {
    return await this.usersRepository.save(userProfileDto);
  }
  findAll(): Promise<UserEntity[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<UserEntity> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
