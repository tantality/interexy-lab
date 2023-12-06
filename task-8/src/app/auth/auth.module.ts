import { Module } from '@nestjs/common';
import { RolesModule } from 'app/roles/roles.module';
import { AuthRepo } from 'domain/repos/auth.repo';
import { PrismaModule } from 'libs/prisma/prisma.module';
import { SecurityModule } from 'libs/security/security.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [PrismaModule, SecurityModule, RolesModule],
  controllers: [AuthController],
  providers: [AuthService, AuthRepo],
})
export class AuthModule {}
