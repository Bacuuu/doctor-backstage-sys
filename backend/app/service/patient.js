'use strict';

const Service = require('egg').Service;

class PatientService extends Service {
  async findPatientById(id) {
    const { ctx } = this;
    const find_result = await ctx.model.Patient.findOne({
      _id: id,
    }, 'basicInfo treatment_history wear_time');
    if (!find_result || !find_result._id) {
      return {
        success: false,
        msg: '不存在该用户',
      };
    }
    return find_result;
  }

  async buffPatient(id) {
    const { ctx } = this;
    const find_result = await ctx.model.Patient.findOne({
      _id: id,
    });
    if (!find_result || !find_result._id) {
      return {
        success: false,
        msg: '不存在该用户',
      };
    }
    if (find_result.buff) {
      return {
        success: false,
        msg: '已标记该用户',
      };
    }
    const update_result = await ctx.model.Patient.updateOne({
      _id: id,
    }, {
      $set: {
        buff: true,
      },
    });
    if (!update_result || update_result.nModified !== 1) {
      return {
        success: false,
        msg: '标记失败',
      };
    }
    return {
      success: true,
      msg: '标记成功',
    };
  }

  async releaseBuffPatient(id) {
    const { ctx } = this;
    const find_result = await ctx.model.Patient.findOne({
      _id: id,
    });
    if (!find_result || !find_result._id) {
      return {
        success: false,
        msg: '不存在该用户',
      };
    }
    if (find_result.buff === false) {
      return {
        success: false,
        msg: '未标记该用户',
      };
    }
    const update_result = await ctx.model.Patient.updateOne({
      _id: id,
    }, {
      $set: {
        buff: false,
      },
    });
    if (!update_result || update_result.nModified !== 1) {
      return {
        success: false,
        msg: '取消标记失败',
      };
    }
    return {
      success: true,
      msg: '取消标记成功',
    };
  }

  async ajaxGetData() {
    const { ctx } = this;
    return await ctx.model.Ajaxdata.findOne({}).sort({
      time: -1,
    });
  }
}
module.exports = PatientService;
