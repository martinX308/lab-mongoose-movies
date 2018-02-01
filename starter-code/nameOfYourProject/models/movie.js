"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CelebritySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: Number
});

const Celebrity = mongoose.model('Celebrity', CelebritySchema);
module.exports = Celebrity;