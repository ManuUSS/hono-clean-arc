import { CreateUserDto } from "../dtos/create-user.dto";

// TODO: Create entities
export abstract class UserRepository {

  abstract create( user:CreateUserDto ): Promise<any>;
  abstract getAll(): Promise<any>;  
  
  abstract getById( id:string ): Promise<any>;
  // abstract updateById( user:any ): Promise<any>;

  abstract deleteById( id:string ): Promise<any>;

};


