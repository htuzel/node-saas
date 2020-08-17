import jwt from 'jsonwebtoken';
import { getConnectionByClientId } from '../connectionManager';

module.exports = (req, res, next) => {
  const token = req.headers['x-access-token'] || req.body.token || req.query.token;

  if (token) {
    jwt.verify(token, req.app.get('client_secret'), (error, decoded) => {
      if (error) {
        res.json({
          message: error
        });
      } else {
        req.connection = getConnectionByClientId(decoded.client_id);
        next();
      }
    });
  } else {
    res.json({
      message: 'No token provided.'
    });
  }
};