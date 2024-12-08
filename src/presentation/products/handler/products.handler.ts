import { Hono } from 'hono';

import { products } from '@data/postgres';
import { UpdateProductDto, CreateProductDto } from '@domain/products';

const app = new Hono().basePath('/product');

app
  .get('/', ( c ) => { return c.json( products ) })
  .post( async ( c ) => {

    const payload = await c.req.json();
    const [ error, createProductDto ] = CreateProductDto.create( payload );
    if( error ) return c.json( { message: error }, 400 );

    

    return c.json({ product:createProductDto, message: 'Product created' },201);
  });


app
  .get('/:id', ( c ) => { return c.json( products.find( p => p.id === c.req.param('id') ) ) })
  .put( async ( c ) => {

    const payload = await c.req.json();
    const [ error, updateProductDto ] = UpdateProductDto.create( payload );

    if( error ) return c.json( { message: error }, 400 );

    return c.json({ product:updateProductDto, message: 'Product updated' }, 201);

  })
  .delete(( c ) => { return c.json( { message: 'Product deleted' } ) });



export default app;