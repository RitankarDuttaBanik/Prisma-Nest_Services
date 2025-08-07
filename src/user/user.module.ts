import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaMdoule } from 'src/Prisma/prisma.module';

@Module({
  imports : [PrismaMdoule],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
