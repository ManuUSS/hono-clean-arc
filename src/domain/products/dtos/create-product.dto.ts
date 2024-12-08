

export class CreateProductDto {

  private constructor(
    public readonly store_id:    string,
    public readonly name:        string,
    public readonly description: string,
    public readonly price:       number,
    public readonly sizes:       string,
    public readonly colors:      string,
    public readonly category:    string,
  ) {};


  static create( obj:Record<string, any> ): [ string?, CreateProductDto? ] {
  
    const { 
      store_id, 
      name, 
      description, 
      price, 
      sizes, 
      colors, 
      category 
    } = obj;

    if( !store_id ) return [ 'Must provide a store_id' ];
    if( !name )  return [ 'Invalid name' ];
    if( !description ) return [ 'Invalid description' ];
    if( !price ) return [ 'Invalid price' ];
    if( !sizes ) return [ 'Invalid sizes' ];
    if( !colors ) return [ 'Invalid colors' ];
    if( !category ) return [ 'Invalid category' ];

    return [ 
      undefined, 
      new CreateProductDto( store_id, name, description, price, sizes, colors, category ) 
    ];

  }

};


