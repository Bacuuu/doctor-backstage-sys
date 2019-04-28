'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const patient = new Schema({
    basicInfo: {
      // 患者姓名
      name: {
        type: String,
        required: true,
      },
      age: {
        type: String,
        required: true,
      },
      // 性别 男为true,女为false,
      gender: {
        type: Boolean,
        requierd: true,
      },
      // 治疗时间
      treatment_time: {
        type: String,
        required: true,
      },
      // 建议穿戴时间
      sug_wear_time: {
        type: String,
        required: true,
      },
    },
    // 患者分类
    // '0' --> 5-15°
    // '1' --> 15-25°
    // '2' --> 25-35°
    // '3' --> 35-45°
    category: {
      type: String,
      default: '0',
    },
    // 诊断历史
    treatment_history: [{
      date: String,
      project: String,
      info: String,
      min_wear_time: String,
    }],
    // 是否被标记
    buff: {
      type: Boolean,
      default: false,
    },
    // 是否异常
    debuff: {
      type: Boolean,
      default: false,
    },
    // 穿戴时间
    // date 数据上传时间
    // time 佩戴时间
    // 传感器数据
    wear_time: [{
      date: String,
      time: String,
      pressure: Array,
    }],
  });
  return mongoose.model('patient', patient, 'patient');
};
