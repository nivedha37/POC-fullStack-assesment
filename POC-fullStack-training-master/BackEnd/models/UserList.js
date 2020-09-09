const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
 
 userId: {
      type: String,
      required: true,
      unique: true
  },
  password: {
      type: String,
      required: true
  }

})

module.exports = UserList = mongoose.model('userList', UserSchema);