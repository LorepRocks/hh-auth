import { Module } from '@nestjs/common';
import { JwtValidationController } from './jwt-validaiton.controller';
import { JwtValidationService } from './jwt-validation.service';

@Module({
    controllers: [JwtValidationController],
    providers: [JwtValidationService],
    exports: [JwtValidationService]
  })
export class JwtValidationModule {}
