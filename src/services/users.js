import { getConnection } from '../connectionManager';

import User from '../models/User';

export function getAll() {
  const model = getConnection().model('user');
  return model.find({ });
}