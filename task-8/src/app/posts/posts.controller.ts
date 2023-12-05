import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { PostDto } from 'domain/dto/post.dto';
import { CreatePostForm } from './domain/create-post.form';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  mock_author_id = '73dc4871-1327-4fcc-94dd-2c1b8c08cf80';

  @Post()
  async createPost(@Body() body: CreatePostForm) {
    const form = CreatePostForm.from(body);
    const errors = await CreatePostForm.validate(form);
    if (errors) {
      throw new BadRequestException('error', errors.join(','));
    }

    const postEntity = await this.postsService.createAuthorPost(
      this.mock_author_id,
      form,
    );

    return PostDto.fromEntity(postEntity);
  }
}
