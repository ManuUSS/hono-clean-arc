
export class LoginUserDto {

  private constructor(
    public readonly email:    string,
    public readonly password: string
  ){};


  static create( obj:Record<string, any> ): [ string?, LoginUserDto? ] {
  
    const { email, password } = obj;

    if( !email ) return [ 'Invalid email' ];
    if( !password ) return [ 'Invalid password' ];

    return [ undefined, new LoginUserDto( email, password ) ];

  }

  

};



