import { Hono } from 'hono';

import { users } from '@data/postgres';
import { JWTAdapter, UUIDAdapter } from '@config/adapters';
import { CreateUserDto } from '@domain/users/dtos/create-user.dto';

const app = new Hono().basePath('/user');

const PATHS = ['/', '/:id'];
const METHODS = ['GET', 'PATCH', 'DELETE'];

app.on( METHODS, PATHS, async ( c, next ) => {
  const bearerToken = c.req.header('Authorization')?.replace('Bearer ', '') || '';
  const validToken = await JWTAdapter.verifyToken( bearerToken );
  if( !validToken ) return c.json({ message: 'Invalid token' }, 401);
  return next();
});

app
  .get('/', ( c ) => { return c.json( users ) })
  .post(async ( c ) => {
    const payload = await c.req.json();
    const [ error, createUserDto ] = CreateUserDto.create( payload );
    if( error ) return c.json({ message: error }, 400);

    return c.json({ user:createUserDto, message: 'User created' },201);
  });

app
  .get('/:id', ( c ) => { return c.json( users.find( u => u.id === c.req.param('id') ) ) })
  .put(async ( c ) => {
    const payload = await c.req.json();
    return c.json({ user:payload, message: 'User updated' },201);
  });

export default app;