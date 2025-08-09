import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { PrismaMdoule } from 'src/Prisma/prisma.module';

@Module({
  imports : [PrismaMdoule],
  controllers: [PostController],
  providers: [PostService]
})
export class PostModule {}
