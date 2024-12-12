

export class RegisterUserDto {
  
  private constructor(
    public readonly name:     string,
    public readonly email:    string,
    public readonly password: string
  ){};


  static create( obj:Record<string, any> ): [ string?, RegisterUserDto? ] {
    
    const { name, email, password } = obj;

    if( !name ) return [ 'Invalid name' ];
    if( !email ) return [ 'Invalid email' ];
    if( !password ) return [ 'Invalid password' ];

    return [ undefined, new RegisterUserDto( name, email, password ) ];
  
  };


}


