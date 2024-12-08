import { Hono } from 'hono';

import UserHandler from './presentation/users/handler/users.handler';
import ProductHandler from './presentation/products/handler/products.handler';

const api = new Hono().basePath('/api');

api.route('/', UserHandler );
api.route('/', ProductHandler );

// app.route('/orders', );

export default api;
