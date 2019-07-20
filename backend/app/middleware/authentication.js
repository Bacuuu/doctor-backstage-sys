'use strict';

module.exports = () => {
  return async function authentication(ctx, next) {
    await next();
    const user = ctx.session.user;
    const routeStr = ctx.request.path;
    if (routeStr === '/signinPage' || routeStr === '/' || routeStr === '/newData') {
      return;
    }
    if (!user) {
      ctx.redirect('/signinPage');
    }
  };
};
