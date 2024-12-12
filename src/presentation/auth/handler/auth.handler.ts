import { Hono } from 'hono';

import { JWTAdapter } from '@config/adapters';
import { LoginUserDto } from '@domain/auth/dtos/login-user.dto';
import { RegisterUserDto } from '@domain/auth/dtos/register-user.dto';
import { AuthRepositoryImpl } from '@infrastructure/auth/repositories/auth.repository.impl';
import { AuthDataSourceImpl } from '@infrastructure/auth/datasources/auth.datasource.impl';
import { LoginUser } from '@domain/auth/use-cases/login-user';
import { RegisterUser } from '@domain/auth/use-cases/register-user';


const app = new Hono().basePath('/auth');

const authRepository = new AuthRepositoryImpl( new AuthDataSourceImpl() );
const loginUseCase = new LoginUser( authRepository );
const registerUseCase = new RegisterUser( authRepository );

app
  .post('/login', async ( c ) => {
    const payload = await c.req.json();

    const [ error, loginUserDto ] = LoginUserDto.create( payload );

    if( error ) return c.json({ error }, 400);

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
  .post('/register', async ( c ) => {
    const payload = await c.req.json();

    const [ error, registerUserDto ] = RegisterUserDto.create( payload );

    if( error ) return c.json({ error }, 400);

    return c.json({ payload, message: 'User registered' }, 201);
  });

app
  .get('/refresh-token', async ( c ) => {
    return c.json({ message: 'Token refreshed' }, 201);
  });
  

export default app;

