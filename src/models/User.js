import mongoose from "mongoose";
var Schema = mongoose.Schema;

var UserSchema = new Schema({  
  customer_id: Number,
  id: Number,
  name: String,
  email: String,
  created_at: {
    type: Date,
    default: Date.now()
  },
  updated_at: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("user", UserSchema);