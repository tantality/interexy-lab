import { Injectable } from '@nestjs/common';
import { RoleTypes, User } from '@prisma/client';
import { AuthRepo } from 'domain/repos/auth.repo';
import { RolesRepo } from 'domain/repos/roles.repo';
import { UsersRepo } from 'domain/repos/users.repo';
import { SecurityService } from 'libs/security/security.service';
import { SignUpForm } from './domain/signup.form';

@Injectable()
export class AuthService {
  constructor(
    private authRepo: AuthRepo,
    private usersRepo: UsersRepo,
    private rolesRepo: RolesRepo,
    private securityService: SecurityService,
  ) {}

  async makeNewUser(form: SignUpForm & Pick<User, 'normalized_email'>) {
    const role = await this.rolesRepo.findOneByType(RoleTypes.User);
    if (!role) {
      return;
    }

    const hashedPassword = await this.securityService.hashPassword(
      form.password,
    );

    const user = await this.usersRepo.createOne({
      role_id: role.id,
      email: form.email,
      normalized_email: form.normalized_email,
      password: hashedPassword,
      profile_first_name: form.firstName,
      profile_last_name: form.lastName,
    });

    return user;
  }
}
