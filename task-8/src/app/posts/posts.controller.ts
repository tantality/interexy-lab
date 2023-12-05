import {
  BadRequestException,
  Body,
  Controller,
  Post,
  Delete,
  Param,
  NotFoundException,
} from '@nestjs/common';
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

    const postEntity = await this.postsService.findOneByTitleAndAuthorId(
      body,
      this.mock_author_id,
    );

    if (postEntity) {
      throw new BadRequestException('Post already exists');
    }

    const createdPostEntity = await this.postsService.createPost(
      this.mock_author_id,
      form,
    );

    return PostDto.fromEntity(createdPostEntity);
  }

  @Delete(':id')
  async deletePost(@Param('id') id: string) {
    const postEntity = await this.postsService.findPostByIdAndAuthorId(
      id,
      this.mock_author_id,
    );

    if (!postEntity) {
      throw new NotFoundException(`Post isn't found`);
    }

    await this.postsService.deletePost(id);
  }
}
