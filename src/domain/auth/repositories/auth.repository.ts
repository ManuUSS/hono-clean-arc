import type { LoginUserDto } from '../dtos/login-user.dto';
import type { RegisterUserDto } from '../dtos/register-user.dto';

type LoginResponse = {
  ok: boolean;
  message: string;
};

export abstract class AuthRepository {
  abstract login( dto:LoginUserDto ): Promise<LoginResponse>;
  abstract register( dto:RegisterUserDto ): Promise<any>;
}



