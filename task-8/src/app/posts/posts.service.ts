import { BadRequestException, Injectable } from '@nestjs/common';
import { Post } from '@prisma/client';
import { PostsRepo } from 'domain/repos/posts.repo';

@Injectable()
export class PostsService {
  constructor(private postsRepo: PostsRepo) {}

  async findAuthorPostById(authorId: string, postId: string) {
    return this.postsRepo.findAuthorPostById(authorId, postId);
  }

  async createAuthorPost(
    author_id: string,
    post: Pick<Post, 'content' | 'title'>,
  ) {
    const existingPost = await this.postsRepo.findAuthorPostByTitle(
      author_id,
      post,
    );

    if (existingPost) {
      throw new BadRequestException('Post already exists');
    }

    const createdPost = await this.postsRepo.createAuthorPost(author_id, post);

    return createdPost;
  }

  async deletePost(post_id: string) {
    await this.postsRepo.deletePost(post_id);
  }
}
