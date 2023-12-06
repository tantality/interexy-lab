import { Module } from '@nestjs/common';
import { RolesRepo } from 'domain/repos/roles.repo';
import { PrismaModule } from 'libs/prisma/prisma.module';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';

@Module({
  imports: [PrismaModule],
  controllers: [RolesController],
  providers: [RolesService, RolesRepo],
  exports: [RolesService, RolesRepo],
})
export class RolesModule {}
