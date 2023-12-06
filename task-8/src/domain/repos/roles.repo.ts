import { Injectable } from '@nestjs/common';
import { Role } from '@prisma/client';
import { PrismaService } from 'libs/prisma/prisma.service';

@Injectable()
export class RolesRepo {
  constructor(private readonly prisma: PrismaService) {}

  async findRoles() {
    return await this.prisma.role.findMany();
  }

  async findOneByType(type: Pick<Role, 'type'>) {
    return await this.prisma.role.findUnique({ where: { type } });
  }
}
