'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  pushNotification: async ctx => {
    const { request = {} } = ctx;
    const { body = {}, header } = request;
    const { model } = body

    if (model === 'month-games') {
      console.info('Start push notifications');
      await strapi.services['expo-token'].newMonthlyGamesPush(header);
      console.info('Finished push notifications');
    }

    ctx.send('Finished');
  }
};
