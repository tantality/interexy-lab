import { Module } from '@nestjs/common';
import { PostsModule } from 'app/posts/posts.module';
import { RolesModule } from 'app/roles/roles.module';
import { UsersModule } from 'app/users/users.module';

@Module({
  imports: [PostsModule, RolesModule, UsersModule],
})
export class AppModule {}
