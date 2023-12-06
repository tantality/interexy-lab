import { Module } from '@nestjs/common';
import { PostsRepo } from 'domain/repos/posts.repo';
import { PrismaModule } from 'libs/prisma/prisma.module';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';

@Module({
  imports: [PrismaModule],
  controllers: [RolesController],
  providers: [RolesService, PostsRepo],
})
export class PostsModule {}
