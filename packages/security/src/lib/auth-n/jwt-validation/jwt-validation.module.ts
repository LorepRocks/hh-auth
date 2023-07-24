import { Module } from '@nestjs/common';
import { JwtValidationService } from './jwt-validation.service';

export * from './jwt-validation.service';
@Module({
    imports:[],
    providers:[JwtValidationService],
    exports:[JwtValidationService]
})
export class JwtValidationModule {}
