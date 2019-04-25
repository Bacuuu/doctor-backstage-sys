'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const patient = new Schema({

  });
  return mongoose.model('patient', patient, 'patient');
};
