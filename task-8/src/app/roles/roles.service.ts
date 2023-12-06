import { Injectable } from '@nestjs/common';
import { RolesRepo } from 'domain/repos/roles.repo';

@Injectable()
export class RolesService {
  constructor(private rolesRepo: RolesRepo) {}
}
