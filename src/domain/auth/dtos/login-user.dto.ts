
export class LoginUserDto {

  private constructor(
    public readonly email:    string,
    public readonly password: string
  ){};


  static create( obj:Record<string, any> ): LoginUserDto {
  
    const { email, password } = obj;
    return new LoginUserDto( email, password );

  }

  

};



