import { CreateUserDto } from '@domain/users/dtos';
import { UserRepository } from '@domain/users/repositories';
import { type UserDataSource } from '@domain/users/datasources';

export class UserRepositoryImpl implements UserRepository {

  constructor(
    private readonly dataSource:UserDataSource
  ) {}

  create(user:CreateUserDto): Promise<any> {
    return this.dataSource.create( user );
  }

  getAll(): Promise<any> {
    return this.dataSource.getAll();
  }

  getById(id: string): Promise<any> {
    throw new Error("Method not implemented.");
  }
  deleteById(id: string): Promise<any> {
    throw new Error("Method not implemented.");
  }

  

};


