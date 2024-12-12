import { JWTAdapter } from '@config/adapters';
import { LoginUserDto } from '@domain/auth/dtos/login-user.dto';
import { Hono } from 'hono';


const app = new Hono().basePath('/auth');

app
  .post('/login', async ( c ) => {
    const payload = await c.req.json();

    const [ error, loginUserDto ] = LoginUserDto.create( payload );

    if( error ) return c.json({ error }, 400);

    const accessToken = await JWTAdapter.generateToken( { email: loginUserDto?.email }, '1h');
    const refreshToken = await JWTAdapter.generateToken( { email: loginUserDto?.email }, '7d');

    return c.json({ access_token: accessToken, refresh_token: refreshToken }, 201);
  });

app
  .post('/register', async ( c ) => {
    const payload = await c.req.json();
    return c.json({ payload, message: 'User registered' }, 201);
  });

app
  .get('/refresh-token', async ( c ) => {
    return c.json({ message: 'Token refreshed' }, 201);
  });
  

export default app;

