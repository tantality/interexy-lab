import { Injectable } from '@nestjs/common';
import { Post } from '@prisma/client';
import { PostsRepo } from 'domain/repos/posts.repo';

@Injectable()
export class PostsService {
  constructor(private postsRepo: PostsRepo) {}

  async findAllPosts() {
    return this.postsRepo.findAllPosts();
  }

  async findPostByIdAndAuthorId(postId: string, authorId: string) {
    return this.postsRepo.findOneByIdAndAuthorId(postId, authorId);
  }

  async findOneByTitleAndAuthorId(post: Pick<Post, 'title'>, authorId: string) {
    return this.postsRepo.findOneByTitleAndAuthorId(post, authorId);
  }

  async createPost(authorId: string, post: Pick<Post, 'content' | 'title'>) {
    return await this.postsRepo.createOne(authorId, post);
  }

  async deletePost(id: string) {
    await this.postsRepo.deleteOne(id);
  }
}
