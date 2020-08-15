import './env';
import express from 'express';
import bodyParser from 'body-parser';

import { connectAllDb } from './connectionManager';

import users from './routes/users';

import jwt from 'jsonwebtoken';
import verifyToken from './middlewares/verifyToken';

const PORT = 9090;

const app = express();

app.set('port', PORT);
app.use(bodyParser.json());

app.set('api_secret_key', process.env.API_SECRET_KEY);

connectAllDb();

app.get('/', (req, res, next) => {
  const payload = {
    slug: 'tenant1'
  };
  const token = jwt.sign(payload, req.app.get('api_secret_key'), {
    expiresIn: 720
  });
  res.json({
    token
  }); 
});

app.use('/api', verifyToken);
app.use('/api/users', users);

app.listen(PORT, () => {
  console.log(`Express server started at port: ${PORT}`);
});