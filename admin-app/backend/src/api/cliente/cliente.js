const restful = require('node-restful')
const mongoose = restful.mongoose

const clienteSchema = new mongoose.Schema({
  name: {type: String, require: true},
  phone: {type: Number, require: true},
  done: {type: Boolean, require: true, default: false},
  createdAt: { type: Date, default: Date.now }
})

module.exports = restful.model('Cliente', clienteSchema)