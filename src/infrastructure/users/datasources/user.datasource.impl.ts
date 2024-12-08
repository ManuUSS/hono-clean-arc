import { users } from '@data/postgres';
import { BcryptAdapter, UUIDAdapter } from '@config/adapters';

import { CreateUserDto } from '@domain/users/dtos';
import { UserDataSource } from '@domain/users/datasources';


export class UserDataSourceImpl implements UserDataSource {

  create( user:CreateUserDto ): Promise<any> {

    const userToSave = {
      id: UUIDAdapter.v4(),
      lastname: 'Lobo',
      photo: 'https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg?t=st=1733699187~exp=1733702787~hmac=c83f9e30fba7059e556e7590b7bde10b7363b1f770c2d36d43708853dcba30e0&w=740',
      role: 'user',
      store_id: 'a07c8ddf-cb39-4c8e-8454-9b882c9db88e',
      ...user,
      password: BcryptAdapter.hash( user.password )
    };

    users.push(userToSave);

    // TODO: Return user entity
    return Promise.resolve( userToSave ); 
  }

  getAll(): Promise<any> {
    return Promise.resolve( users );
  }

  getById(id: string): Promise<any> {
    throw new Error("Method not implemented.");
  }

  deleteById(id: string): Promise<any> {
    throw new Error("Method not implemented.");
  }

};


