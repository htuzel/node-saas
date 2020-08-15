import './env';
import express from 'express';
import bodyParser from 'body-parser';

import { connectAllDb } from './connectionManager';
import * as connectionResolver from './middlewares/connectionResolver';

import users from './routes/users';

const PORT = 9090;

const app = express();

app.set('port', PORT);
app.use(bodyParser.json());

connectAllDb();

app.use(connectionResolver.resolve);

// API Route
app.get('/', (req, res, next) => {
  res.json({ body: 'Hello multi-tenant application.' });
});

app.use('/', users);

app.listen(PORT, () => {
  console.log(`Express server started at port: ${PORT}`);
});