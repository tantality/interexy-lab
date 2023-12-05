import { Module } from '@nestjs/common';
import { PostsRepo } from 'domain/repos/posts.repo';
import { PrismaModule } from 'libs/prisma/prisma.module';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

@Module({
  imports: [PrismaModule],
  controllers: [PostsController],
  providers: [PostsService, PostsRepo],
})
export class PostsModule {}
