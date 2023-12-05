import { BadRequestException, Injectable } from '@nestjs/common';
import { Post } from '@prisma/client';
import { PostsRepo } from 'domain/repos/posts.repo';

@Injectable()
export class PostsService {
  constructor(private postsRepo: PostsRepo) {}

  async findPostByIdAndAuthorId(postId: string, authorId: string) {
    return this.postsRepo.findOneByIdAndAuthorId(postId, authorId);
  }

  async createPost(authorId: string, post: Pick<Post, 'content' | 'title'>) {
    const existingPost = await this.postsRepo.findOneByTitleAndAuthorId(
      post,
      authorId,
    );

    if (existingPost) {
      throw new BadRequestException('Post already exists');
    }

    const createdPost = await this.postsRepo.createOne(authorId, post);

    return createdPost;
  }

  async deletePost(id: string) {
    await this.postsRepo.deleteOne(id);
  }
}
