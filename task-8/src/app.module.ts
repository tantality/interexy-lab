import { Module } from '@nestjs/common';
import { PostsModule } from 'app/posts/posts.module';

@Module({
  imports: [PostsModule],
})
export class AppModule {}
