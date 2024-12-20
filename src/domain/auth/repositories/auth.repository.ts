
import type { LoginUserDto } from '../dtos/login-user.dto';
import type { RegisterUserDto } from '../dtos/register-user.dto';
import type { RegisterEntity } from '../entities/register.entity';

type LoginResponse = {
  ok: boolean;
  message: string;
};

export abstract class AuthRepository {
  abstract login( dto:LoginUserDto ): Promise<LoginResponse>;
  abstract register( dto:RegisterUserDto ): Promise<RegisterEntity | null>;
}



