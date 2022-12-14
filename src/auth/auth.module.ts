import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from 'src/config/config.service';
import { UserEntity } from './entities/user.entity';
import { UserRepository } from './repositories/user.repository';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig('auth')),
    TypeOrmModule.forFeature([UserEntity]),
  ],
  providers: [AuthService, UserService, UserRepository],
  exports: [UserRepository],
})
export class AuthModule {}
