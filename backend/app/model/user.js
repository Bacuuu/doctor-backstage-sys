'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const user = new Schema({
    // 账号
    username: {
      type: String,
      required: true,
    },

    // 密码
    password: {
      type: String,
      required: true,
    },

    // 该医生名字
    name: {
      type: String,
      required: true,
    },

    // 该医生的患者
    patient: [{
      type: Schema.Types.ObjectId,
      ref: 'patient',
    }],


  });
  return mongoose.model('user', user, 'user');
};
