import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from 'src/config/config.service';
import { LoggerModule } from 'src/libs/logger/logger.module';
import { InputController } from './controllers/input.controller';
import { InputEntity } from './entities/input.entity';
import { InputRepository } from './repositories/input.repository';
import { DataService } from './services/data.service';
import { InputService } from './services/input.service';

@Module({
  imports: [
    LoggerModule,
    TypeOrmModule.forRoot(configService.getTypeOrmConfig('data')),
    TypeOrmModule.forFeature([InputEntity]),
  ],
  providers: [DataService, InputService, InputRepository],
  controllers: [InputController],
})
export class DataModule {}
