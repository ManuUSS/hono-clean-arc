import { Hono } from 'hono';


import { users } from '../../../data/postgres';

const app = new Hono();

app.get('/', ( c ) => { return c.json( users ) });
app.get('/:id', ( c ) => { return c.json( users.find( u => u.id === c.req.param('id') ) ) });
app.post('/', async ( c ) => {
  const payload = await c.req.json();
  console.log('--------------------------------------');
  console.log( payload );
  console.log('--------------------------------------');
  return c.json('Hello World!') 
});

export default app;