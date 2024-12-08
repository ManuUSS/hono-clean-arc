import { Hono } from 'hono';

import { users } from '@data/postgres';
import { JWTAdapter } from '@config/adapters';

import { CreateUserDto } from '@domain/users/dtos/create-user.dto';

import { UserRepositoryImpl } from '@infrastructure/users/repositories';
import { UserDataSourceImpl } from '@infrastructure/users/datasources';


const app = new Hono().basePath('/user');
// This paths and methods require a valid JWT token
const PATHS = ['/', '/:id'];
const METHODS = [ 'GET', 'PATCH', 'DELETE', 'POST' ];

const userRepository = new UserRepositoryImpl( new UserDataSourceImpl() );

/**
 * Middleware to validate JWT token
 * @see {@link JWTAdapter.verifyToken}
 */
app.on( METHODS, PATHS, async ( c, next ) => {

  const bearerToken = c.req.header('Authorization')?.replace('Bearer ', '');
  if( !bearerToken ) return c.json({ message: 'Token not provided' }, 401);

  const validToken = await JWTAdapter.verifyToken( bearerToken );
  if( !validToken ) return c.json({ message: 'Invalid token' }, 401);
  return next();

});

app
  .get('/', async ( c ) => { return await userRepository.getAll() })
  .post(async ( c ) => {
    
    const payload = await c.req.json();
    const [ error, createUserDto ] = CreateUserDto.create( payload );
    if( error ) return c.json({ message: error }, 400);
  
    const savedUser = await userRepository.create( createUserDto! );
    return c.json({ user:savedUser, message: 'User created' }, 201);
    
  });

app
  .get('/:id', ( c ) => { return c.json( users.find( u => u.id === c.req.param('id') ) ) })
  .put(async ( c ) => {
    const payload = await c.req.json();
    return c.json({ user:payload, message: 'User updated' },201);
  });

export default app;