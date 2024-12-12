import { RegisterUserDto } from '../dtos/register-user.dto';
import { AuthRepository } from '../repositories/auth.repository';


export interface RegisterUserUseCase {
  // TODO: Define Login Entity
  execute( dto:RegisterUserDto ): Promise<any>;
};

export class RegisterUser implements RegisterUserUseCase {

  constructor(
    private readonly userRepository: AuthRepository,
  ){}

  async execute( dto:RegisterUserDto ): Promise<any> {
    return await this.userRepository.register( dto );
  }

};


