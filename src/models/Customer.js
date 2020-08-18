import mongoose from "mongoose";
var Schema = mongoose.Schema;

var CustomerSchema = new Schema({
  id: Number,
  name: String,
  email: String,
  password: String, 
  client_id: String,
  client_secret: String,
  created_at: {
    type: Date,
    default: Date.now()
  },
  updated_at: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("customer", CustomerSchema);