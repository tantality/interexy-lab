import { Injectable } from '@nestjs/common';
import { PrismaService } from 'libs/prisma/prisma.service';

@Injectable()
export class AuthRepo {
  constructor(private readonly prisma: PrismaService) {}
}
