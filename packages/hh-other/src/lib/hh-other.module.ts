import { Module } from '@nestjs/common';
import { JwtValidationModule } from '@hh-auth/hh-security';

@Module({
  imports:[JwtValidationModule]
})
export class HhOtherModule {}
