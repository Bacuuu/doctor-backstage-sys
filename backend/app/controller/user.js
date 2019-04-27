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
      ctx.redirect('/managePage');
    } else {
      ctx.body = verify_result;
    }
  }

  async managePage() {
    const { ctx } = this;
    await ctx.render('managePage');
  }
}

module.exports = UserController;
