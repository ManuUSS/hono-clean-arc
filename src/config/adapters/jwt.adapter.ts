import { sign, verify } from 'jsonwebtoken';

const JWT_SEED = Bun.env.TOKEN_SECRET;

export class JWTAdapter {

  static async generateToken( payload:Record<string, any>, duration:string = '2h' ) {

    return new Promise( ( resolve ) => {

      sign( payload, JWT_SEED!, { expiresIn: duration }, ( error, token ) => {
        console.log( error );
        if( error ) return resolve( null );
        resolve( token );
      });

    });

  };

  static verifyToken<T>( token:string ):Promise<T | null> {

    return new Promise(( resolve ) => {
      verify( token, JWT_SEED!, (err, decoded) => {
        
        if ( err ) resolve( null );
        
        resolve( decoded as T );
      
      });
    });

  };

};


