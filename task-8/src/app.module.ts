import { Module } from '@nestjs/common';
import { PostsModule } from 'app/posts/posts.module';
import { RolesModule } from 'app/roles/roles.module';

@Module({
  imports: [PostsModule, RolesModule],
})
export class AppModule {}
