'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TestdocSchema = new Schema({
  user: String,
  age: Number
});

module.exports = mongoose.model('Testdoc', TestdocSchema);