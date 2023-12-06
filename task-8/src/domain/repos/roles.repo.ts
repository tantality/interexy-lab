import { Injectable } from '@nestjs/common';
import { PrismaService } from 'libs/prisma/prisma.service';

@Injectable()
export class RolesRepo {
  constructor(private readonly prisma: PrismaService) {}

  async findRoles() {
    return await this.prisma.role.findMany();
  }
}
