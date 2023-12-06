import {
  BadRequestException,
  Body,
  Controller,
  InternalServerErrorException,
  Post,
} from '@nestjs/common';
import normalizeEmail from 'normalize-email';
import { AuthService } from './auth.service';
import { SignUpForm } from './domain/signup.form';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() body: SignUpForm) {
    const normEmail = normalizeEmail(body.email);
    const user = await this.authService.findUserByNormalizedEmail(normEmail);

    if (user) {
      throw new BadRequestException('User already exists');
    }

    const registeredUser = await this.authService.makeNewUser({
      ...body,
      normalized_email: normEmail,
    });

    if (!registeredUser) {
      throw new InternalServerErrorException(`User hasn't been created`);
    }

    return registeredUser;
  }
}
