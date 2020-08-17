import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var CustomerSchema = new Schema({
  name: String,
  email: String,
  password: String,
  db_infos: {
    db_name: String,
    db_host: String,
    db_username: String,
    db_password: String,
    db_port: String
  },  
  client_id: String,
  created_at: Date,
  updated_at: Date
});

module.exports = mongoose.model('customer', CustomerSchema);