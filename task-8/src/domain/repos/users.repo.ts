import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'libs/prisma/prisma.service';

@Injectable()
export class UsersRepo {
  constructor(private readonly prisma: PrismaService) {}

  async findOneByNormalizedEmail(user: Pick<User, 'normalized_email'>) {
    return await this.prisma.user.findUnique({
      where: { normalized_email: user.normalized_email },
    });
  }
}
