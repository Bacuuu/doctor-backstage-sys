'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async signin() {
    const { ctx } = this;
    const { username, password } = ctx.request.body;
    console.log(username, password);
    const verify_result = await ctx.service.user.verify(username, password);
    if (verify_result.success) {
      ctx.session.user = username;
      console.log(ctx.session);
      ctx.redirect(`/managePage/${username}`);
    } else {
      ctx.body = verify_result.message;
    }
  }

  async managePage() {
    const { ctx } = this;
    const { username } = ctx.params;
    // console.log(username);
    console.log(ctx.session);
    if (ctx.session.user !== username) {
      ctx.body = '越权操作!用户不符合';
      return;
    }
    const user_info = await ctx.service.user.findUserByName(username);
    if (!user_info) {
      ctx.body = '没有该用户';
      return;
    }
    // console.log(user_info);
    await ctx.render('managePage', { user_info });
  }
}

module.exports = UserController;
