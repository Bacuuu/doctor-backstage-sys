'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async signin() {
    const { ctx } = this;
    const { username, password } = ctx.request.body;
    const verify_result = await ctx.service.user.verify(username, password);
    if (verify_result) {
      ctx.session.user = username;
    }
  }
}

module.exports = UserController;
