
import { Controller, Get } from '@nestjs/common';

@Controller('jwtValidation')
export class JwtValidationController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}