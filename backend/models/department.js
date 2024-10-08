const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true }
});

module.exports = mongoose.model('Department', departmentSchema);
