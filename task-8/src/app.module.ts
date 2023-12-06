import { Module } from '@nestjs/common';
import { AuthModule } from 'app/auth/auth.module';
import { PostsModule } from 'app/posts/posts.module';
import { RolesModule } from 'app/roles/roles.module';
import { UsersModule } from 'app/users/users.module';

@Module({
  imports: [PostsModule, RolesModule, UsersModule, AuthModule],
})
export class AppModule {}
