const mongoose = require('mongoose')
//TODO: Edit model to save dog picture by breed and file name
const DoggosSchema = new mongoose.Schema({
  dog: {
    type: String,
    required: true,
  },
  saved: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Doggos', DoggosSchema)
