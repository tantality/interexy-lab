import { Injectable } from '@nestjs/common';
import { Post } from '@prisma/client';
import { PrismaService } from 'libs/prisma/prisma.service';

@Injectable()
export class PostsRepo {
  constructor(private readonly prisma: PrismaService) {}

  async findAllPosts() {
    return this.prisma.post.findMany();
  }

  async findOneById(id: string) {
    return this.prisma.post.findUnique({ where: { id } });
  }

  async findOneByIdAndAuthorId(postId: string, authorId: string) {
    return this.prisma.post.findUnique({
      where: { author_id: authorId, id: postId },
    });
  }

  async findOneByTitleAndAuthorId(post: Pick<Post, 'title'>, authorId: string) {
    return await this.prisma.post.findUnique({
      where: { author_id_title: { author_id: authorId, title: post.title } },
    });
  }

  async createOne(authorId: string, post: Pick<Post, 'title' | 'content'>) {
    return await this.prisma.post.create({
      data: {
        author_id: authorId,
        content: post.content,
        title: post.title,
      },
    });
  }

  async updateOne(id: string, post: Pick<Post, 'content' | 'title'>) {
    return await this.prisma.post.update({
      where: { id },
      data: {
        ...post,
      },
    });
  }

  async deleteOne(id: string) {
    await this.prisma.post.delete({ where: { id } });
  }
}
