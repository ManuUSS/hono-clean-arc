import { Hono } from 'hono';
import { jwt } from 'hono/jwt';
import type { JwtVariables } from 'hono/jwt';

import UserHandler from './presentation/users/controllers/users.controller';




type Variables = JwtVariables;
const app = new Hono<{ Variables: Variables }>();

app.use('/users/*', jwt({ secret: process.env.TOKEN_SECRET! }));
app.route('/users', UserHandler );
// app.route('/orders', );

export default app
