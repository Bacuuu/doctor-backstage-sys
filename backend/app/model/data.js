'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const data = new Schema({
    pressure: [[ Number ]],
    avarage: [[ Number ]],
    time: Number,
  });
  return mongoose.model('data', data, 'data');
};
