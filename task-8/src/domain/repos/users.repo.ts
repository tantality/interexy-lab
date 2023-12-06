import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'libs/prisma/prisma.service';

@Injectable()
export class UsersRepo {
  constructor(private readonly prisma: PrismaService) {}

  async createOne(user: Omit<User, 'created_at' | 'updated_at' | 'id'>) {
    return await this.prisma.user.create({
      data: {
        role_id: user.role_id,
        email: user.email,
        normalized_email: user.normalized_email,
        password: user.password,
        profile_first_name: user.profile_first_name,
        profile_last_name: user.profile_last_name,
      },
    });
  }
}
