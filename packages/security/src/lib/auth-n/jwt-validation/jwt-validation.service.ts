import { Injectable } from "@nestjs/common";

@Injectable()
export class JwtValidationService {
    hello(){
        return "Hello from JWT validation service"
    }
}