import { Injectable } from '@nestjs/common';
import { Post } from '@prisma/client';
import { PrismaService } from 'libs/prisma/prisma.service';

@Injectable()
export class PostsRepo {
  constructor(private readonly prisma: PrismaService) {}

  async findAuthorPostById(authorId: string, postId: string) {
    return this.prisma.post.findUnique({
      where: { author_id: authorId, id: postId },
    });
  }

  async findAuthorPostByTitle(author_id: string, post: Pick<Post, 'title'>) {
    return await this.prisma.post.findUnique({
      where: { title: post.title, author_id },
    });
  }

  async createAuthorPost(
    author_id: string,
    post: Pick<Post, 'title' | 'content'>,
  ) {
    return await this.prisma.post.create({
      data: {
        author_id,
        content: post.content,
        title: post.title,
      },
    });
  }

  async deletePost(post_id: string) {
    await this.prisma.post.delete({ where: { id: post_id } });
  }
}
