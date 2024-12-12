import type { LoginUserDto } from '../dtos/login-user.dto';
import type { RegisterUserDto } from '../dtos/register-user.dto';


export abstract class AuthDataSource {
  abstract login( dto:LoginUserDto ): Promise<any>;
  abstract register( dto:RegisterUserDto ): Promise<any>;
}

