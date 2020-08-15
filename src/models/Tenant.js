import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var TenantSchema = new Schema({
  id: Number,
  slug: String,
  db_name: String,
  db_host: String,
  db_username: String,
  db_password: String,
  db_port: String
});

module.exports = mongoose.model('tenant', TenantSchema);