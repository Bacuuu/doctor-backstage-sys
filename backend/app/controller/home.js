'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  // 登陆界面
  async signin() {
    const { ctx } = this;
    await ctx.render('signin');
  }
}

module.exports = HomeController;
