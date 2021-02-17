'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  pushNotification: async ctx => {
    const { request } = ctx;
    
    await strapi.services['expo-token'].newMonthlyGamesPush(request.body);
    ctx.send('Finished');
  }
};
