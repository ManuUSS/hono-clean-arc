

export class RegisterUserDto {
  
  private constructor(
    public readonly name:     string,
    public readonly email:    string,
    public readonly password: string,
    public readonly lastName?: string,
  ){};


  static create( obj:Record<string, any> ):RegisterUserDto {
    const { name, email, password, lastName } = obj;
    return new RegisterUserDto( name, email, password, lastName );
  };


}


