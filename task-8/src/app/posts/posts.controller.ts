import {
  BadRequestException,
  Body,
  Controller,
  Post,
  Delete,
  Param,
  Get,
  NotFoundException,
  Put,
} from '@nestjs/common';
import { PostDto } from 'domain/dto/post.dto';
import { CreatePostForm } from './domain/create-post.form';
import { UpdatePostForm } from './domain/update-post.form';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  mock_author_id = '73dc4871-1327-4fcc-94dd-2c1b8c08cf80';

  @Get()
  async getPosts() {
    const posts = await this.postsService.findAllPosts();
    return PostDto.fromEntities(posts);
  }

  @Get(':id')
  async getPost(@Param('id') id: string) {
    const post = await this.postsService.findPostById(id);

    if (!post) {
      throw new NotFoundException(`Post isn't found`);
    }

    return PostDto.fromEntity(post);
  }

  @Post()
  async createPost(@Body() body: CreatePostForm) {
    const form = CreatePostForm.from(body);
    const errors = await CreatePostForm.validate(form);
    if (errors) {
      throw new BadRequestException('error', errors.join(','));
    }

    const post = await this.postsService.findOneByTitleAndAuthorId(
      body,
      this.mock_author_id,
    );

    if (post) {
      throw new BadRequestException('Post already exists');
    }

    const createdPost = await this.postsService.createPost(
      this.mock_author_id,
      form,
    );

    return PostDto.fromEntity(createdPost);
  }

  @Put(':id')
  async updatePost(@Param('id') id: string, @Body() body: UpdatePostForm) {
    const post = await this.postsService.findPostByIdAndAuthorId(
      id,
      this.mock_author_id,
    );

    if (!post) {
      throw new NotFoundException(`Post isn't found`);
    }

    const updatedPost = await this.postsService.updatePost(id, body);

    return PostDto.fromEntity(updatedPost);
  }

  @Delete(':id')
  async deletePost(@Param('id') id: string) {
    const post = await this.postsService.findPostByIdAndAuthorId(
      id,
      this.mock_author_id,
    );

    if (!post) {
      throw new NotFoundException(`Post isn't found`);
    }

    await this.postsService.deletePost(id);
  }
}
