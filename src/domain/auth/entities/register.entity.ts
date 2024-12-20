

export class RegisterEntity {

  constructor(
    public readonly name:     string,
    public readonly email:    string,
    public readonly lastName?: string,
  ){};

  public static create( obj:Record<string, any> ):RegisterEntity {
    const { name, email, lastName } = obj;

    if( !name || !email ) {
      throw new Error('Missing required fields');
    }
    
    return new RegisterEntity( name, email, lastName );
  }

}


