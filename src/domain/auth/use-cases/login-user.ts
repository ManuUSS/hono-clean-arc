import { LoginUserDto } from '../dtos/login-user.dto';
import { AuthRepository } from '../repositories/auth.repository';


export interface LoginUserUseCase {
  // TODO: Define Login Entity
  execute( dto:LoginUserDto ): Promise<any>;
};

export class LoginUser implements LoginUserUseCase {

  constructor(
    private readonly userRepository: AuthRepository,
  ){}

  async execute( dto:LoginUserDto ): Promise<any> {
    return await this.userRepository.login( dto );
  }

};


