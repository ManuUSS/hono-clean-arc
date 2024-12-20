import type { LoginUserDto } from '@domain/auth/dtos/login-user.dto';
import type { RegisterUserDto } from '@domain/auth/dtos/register-user.dto';
import type { AuthDataSource } from '@domain/auth/datasources/auth.datasource';
import type { AuthRepository } from '@domain/auth/repositories/auth.repository';
import type { RegisterEntity } from '@domain/auth/entities/register.entity';

type LoginResponse = {
  ok: boolean;
  message: string;
};

export class AuthRepositoryImpl implements AuthRepository {

  constructor(
    private readonly authDataSource: AuthDataSource
  ) {}

  login(dto:LoginUserDto): Promise<LoginResponse> {
    return this.authDataSource.login(dto);
  }

  register(dto: RegisterUserDto): Promise<RegisterEntity | null> {
    return this.authDataSource.register(dto);
  }

};


