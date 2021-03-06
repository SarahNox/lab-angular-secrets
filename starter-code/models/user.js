const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, 'The username is required']
  },
  password: {
    type: String,
    required: [true, 'The password is required']
  },
  name: {
    type: String,
    required: [true, 'The fullname is required']
  },
  secret: {
    type: String,
    required: [true, 'The secret is required']
},
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
