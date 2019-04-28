'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async verify(username, password) {
    const { ctx } = this;
    const verify_result = await ctx.model.User.findOne({
      username,
    });
    if (!verify_result || !verify_result._id) {
      return {
        success: false,
        message: '不存在该用户!',
      };
    }
    if (verify_result.password === password) {
      return {
        success: true,
        message: '成功登陆!',
      };
    }
    return {
      success: false,
      message: '账号密码错误',
    };
  }

  async findUserByName(username) {
    const { ctx } = this;
    const user_info = await ctx.model.User.findOne({
      username,
    })
      .populate({
        path: 'patient',
        select: 'basicInfo.name category buff debuff',
      });
    if (!user_info || !user_info._id) {
      return false;
    }
    return user_info;
  }
}
module.exports = UserService;
