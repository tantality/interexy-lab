import { Post, User } from '@prisma/client';
import { UUIDDto } from './uuid.dto';

export class PostDto extends UUIDDto {
  id: string;
  title: string;
  content: string;
  createdAt: number;
  updatedAt: number;
  authorId: string;
  author?: User;

  static fromEntity(entity?: Post & { author?: User }) {
    if (!entity) {
      return;
    }

    const it = new PostDto();
    it.id = entity.id;
    it.title = entity.title;
    it.content = entity.content;
    it.authorId = entity.author_id;
    it.author = entity.author;
    it.created_at = entity.created_at.valueOf();
    it.updated_at = entity.updated_at.valueOf();

    return it;
  }

  static fromEntities(entities?: Post[]) {
    if (!entities?.map) {
      return;
    }

    return entities.map((entity) => this.fromEntity(entity));
  }
}
