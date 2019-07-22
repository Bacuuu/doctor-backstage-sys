'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const ajaxdata = new Schema({
    pressure: Array,
    avarage: Number,
    time: Number,
  });
  return mongoose.model('ajaxdata', ajaxdata, 'ajaxdata');
};
