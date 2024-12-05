import { Hono } from 'hono'
import UserHandler from './presentation/users/controllers/users.controller';

const app = new Hono();

app.route('/users', UserHandler );
// app.route('/orders', );

export default app
