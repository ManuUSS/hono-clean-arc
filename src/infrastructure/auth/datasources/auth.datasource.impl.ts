import { prisma, users } from '@data/postgres';
import { BcryptAdapter } from '@config/adapters';

import type { LoginUserDto } from '@domain/auth/dtos/login-user.dto';
import type { RegisterUserDto } from '@domain/auth/dtos/register-user.dto';
import type { AuthDataSource } from '@domain/auth/datasources/auth.datasource';


type LoginResponse = {
  ok: boolean;
  message: string;
};

export class AuthDataSourceImpl implements AuthDataSource {

  async login( dto:LoginUserDto ):Promise<LoginResponse> {

    await Promise.resolve( null );

    const savedUser = await prisma.user.findUnique({ where: { email: dto.email } });

    if( !savedUser ) {
      return { ok: false, message: 'User not found' };
    }

    if( !savedUser.password ) {
      return { ok:true, message: 'User logged in' };
    }

    const isPasswordValid = BcryptAdapter.compare(dto.password, savedUser.password);
    if( !isPasswordValid ) {
      return { ok: false, message: 'Invalid email or password' };
    }

    return { ok: true, message: 'User logged in' };

  }
  
  register( dto:RegisterUserDto ):Promise<any> {
    throw new Error('Method not implemented');
  }

};


