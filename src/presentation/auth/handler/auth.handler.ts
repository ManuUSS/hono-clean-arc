import { Hono } from 'hono';
import { validator } from 'hono/validator';
import { zValidator } from '@hono/zod-validator'

import { JWTAdapter } from '@config/adapters';
import { LoginUser } from '@domain/auth/use-cases/login-user';
import { RegisterUser } from '@domain/auth/use-cases/register-user';
import { LoginSchema } from '@domain/auth/schemas/login.schema';
import { LoginUserDto } from '@domain/auth/dtos/login-user.dto';
import { RegisterUserDto } from '@domain/auth/dtos/register-user.dto';
import { AuthRepositoryImpl } from '@infrastructure/auth/repositories/auth.repository.impl';
import { AuthDataSourceImpl } from '@infrastructure/auth/datasources/auth.datasource.impl';
import { RegisterSchema } from '@domain/auth/schemas/register.schema';

const app = new Hono().basePath('/auth');

const authRepository = new AuthRepositoryImpl( new AuthDataSourceImpl() );
const loginUseCase = new LoginUser( authRepository );
const registerUseCase = new RegisterUser( authRepository );

app
  .post('/login',
    zValidator('form', LoginSchema, ( result, c ) => {
      if( !result.success ) return c.json({ message: result.error }, 400);
    }),
    async ( c ) => {
      const payload = await c.req.json();

      const loginUserDto = LoginUserDto.create( payload );

      const { ok, message } =  await loginUseCase.execute( loginUserDto! );

      if( !ok ) return c.json({ message }, 401);
      
      const accessTokenPromise = JWTAdapter.generateToken( { email: loginUserDto!.email }, '1h');
      const refreshTokenPromise = JWTAdapter.generateToken( { email: loginUserDto!.email }, '7d');
      
      const [
        accessToken,
        refreshToken
      ] = await Promise.all([ accessTokenPromise, refreshTokenPromise ]);

      return c.json({ access_token: accessToken, refresh_token: refreshToken }, 201);
  });

app
  .post('/register', 
    zValidator('json', RegisterSchema, ( result, c ) => {
      if( !result.success ) return c.json({ message: result.error }, 400);
    }),
    async ( c ) => {
      const payload = await c.req.json();

      const registerUserDto = RegisterUserDto.create( payload );

      const user = await registerUseCase.execute( registerUserDto! );

      if( !user ) return c.json({ message:'Internal server error' }, 500);

      return c.json({ user, message: 'User registered' }, 201);
  });

app
  .get('/refresh-token', async ( c ) => {
    return c.json({ message: 'Token refreshed' }, 201);
  });
  

export default app;

