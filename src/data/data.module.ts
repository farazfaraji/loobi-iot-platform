import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { configService } from 'src/config/config.service';
import { DataService } from './data.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig('data')),
    // TypeOrmModule.forFeature(
    //   DEFAULT_APP_REPOSITORIES,
    //   DatabaseConnections.Default,
    // ),
  ],
  providers: [DataService],
})
export class DataModule {}
