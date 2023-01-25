const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: { type: String, default: '/images/default-image.jpg' },
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: Number
})


module.exports = mongoose.model('Place', placeSchema)