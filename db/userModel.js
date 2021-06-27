const mongoose = require("mongoose");

// user schema
const UserSchema = new mongoose.Schema({
  // email field
  email: {
    type: String,
    required: [true, "Please provide an Email!"],
    unique: [true, "Email Exist"],
  },

  // password field
  password: {
    type: String,
    required: [true, "Please provide a password!"],
    unique: false,
  },

  // games field
  games: {
    type: Array,
    required: false,
    unique: false,
  },

});

// export UserSchema
module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);
