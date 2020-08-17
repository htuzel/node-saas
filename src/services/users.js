import User from '../models/User';

export function getAll(connection) {
  const model = connection.model('user');
  return model.find({ });
}