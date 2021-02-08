'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  pushNotification: async ctx => {
    const { request } = ctx;
    const result = await strapi.services['month-games'].newMonthlyGamesPush(request.body);
    ctx.response.status = result.status;
    ctx.send(result.data.data.status);
  }
};
