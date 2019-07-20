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

  async parent() {
    const { ctx } = this;
    await ctx.render('parent');
  }

  async fault() {
    const { ctx } = this;
    await ctx.render('fault');
  }

  async newData() {
    const { ctx } = this;
    const { pressure } = ctx.request.body;
    const avarage = [];
    // pressure [[1,2,3,4,5,6],[1,2,3,4,5,6],]
    for (const item of pressure) {
      avarage.push(ctx.helper.ava(ctx.helper.toNum(item)));
    }
    await ctx.model.Data.create({
      pressure,
      avarage,
      time: new Date(),
    });
    ctx.body = 'fine';
  }
}

module.exports = UserController;
