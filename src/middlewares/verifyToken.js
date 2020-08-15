import jwt from 'jsonwebtoken';
import { createNamespace } from 'continuation-local-storage';
import { getConnectionBySlug } from '../connectionManager';

let nameSpace = createNamespace('unique context');

module.exports = (req, res, next) => {
  const token = req.headers['x-access-token'] || req.body.token || req.query.token;

  if (token) {
    jwt.verify(token, req.app.get('api_secret_key'), (error, decoded) => {
      if (error) {
        res.json({
          message: error
        });
      } else {
        nameSpace.run(() => {
          nameSpace.set('connection', getConnectionBySlug(decoded.slug));
          next();
        });
      }
    });
  } else {
    res.json({
      message: 'No token provided.'
    });
  }
};