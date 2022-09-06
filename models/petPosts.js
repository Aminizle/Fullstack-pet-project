const mongoose = require('mongoose')

const PetSchema = new mongoose.Schema({
  CatDog: {
    type: String,
    required: true,
  },
  Like: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  },
  imageURL: {
    type: String,
    required: true
  },
  imageBreed: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Pet', PetSchema)
