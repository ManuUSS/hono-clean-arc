import { prisma } from '@data/postgres';
import { BcryptAdapter } from '@config/adapters';

import type { LoginUserDto } from '@domain/auth/dtos/login-user.dto';
import type { RegisterUserDto } from '@domain/auth/dtos/register-user.dto';
import type { AuthDataSource } from '@domain/auth/datasources/auth.datasource';
import { RegisterEntity } from '@domain/auth/entities/register.entity';


type LoginResponse = {
  ok: boolean;
  message: string;
};

export class AuthDataSourceImpl implements AuthDataSource {

  async login( dto:LoginUserDto ):Promise<LoginResponse> {

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
  
  async register( dto:RegisterUserDto ):Promise<RegisterEntity | null> {

    try {
      const newUser = await prisma.user.create({
        data: {
          email: dto.email,
          password: BcryptAdapter.hash( dto.password ),
          name: dto.name,
          lastName: dto.lastName
        },
      });
  
      return RegisterEntity.create( newUser );
    } catch ( error ) {
      return null;
    }

  }

};


