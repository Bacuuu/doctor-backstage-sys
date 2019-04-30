/* eslint valid-jsdoc: "off" */

'use strict';

const path = require('path');
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1556175801841_5636';

  // add your middleware config here
  config.middleware = [ 'authentication' ];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  // view
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks',
    },
  };

  // session config
  config.session = {
    key: '_Doc_Sys_',
    maxAge: 24 * 3600 * 1000,
    httpOnly: true,
    renew: true,
    encrypt: true,
  };

  // database
  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1:27017/docSys',
      options: {},
    },
  };

  // 修改默认的程序端口
  config.cluster = {
    listen: {
      host: '127.0.0.1',
      port: 80,
    },
  };

  // csrf token
  config.security = {
    csrf: false,
    // {
    //   _scrf: '_csrf',
    //   enable： false,
    // },
  };

  // static
  config.static = {
    // 这里的prerix为请求资源时候的目录前缀
    // 例如prefix为/public，有个a.js存放在静态资源目录(如public目录)下的js子文件夹中，即其路径为app/public/js/a.js
    // 则网页中引用相关资源时候，需要设置的url为/static/js/a.js
    prefix: '/public/',
    // 用于存放静态资源的目录列表
    dir: [
      // 目录:app/public
      path.join(appInfo.baseDir, 'app', 'public'),
    ],
  };

  return {
    ...config,
    ...userConfig,
  };
};
