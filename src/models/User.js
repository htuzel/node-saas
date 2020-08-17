import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  id: Number,
  email: String
});

module.exports = mongoose.model('user', UserSchema);