'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const data = new Schema({
    pressure: Array,
    avarage: Number,
    time: Number,
  });
  return mongoose.model('data', data, 'data');
};
