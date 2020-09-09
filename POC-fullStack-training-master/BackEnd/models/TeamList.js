const mongoose = require('mongoose');
const TeamListSchema = new mongoose.Schema({
 
 userId: {
      type: String,
      required: true,
      unique: true
  },
  name: {
      type: String,
      required: true
  }

})

module.exports = TeamListList = mongoose.model('teamList', TeamListSchema);