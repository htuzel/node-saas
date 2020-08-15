import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  id: Number,
  first_name: String,
  last_name: String,
  email: String,
  address: String
});

module.exports = mongoose.model('user', UserSchema);