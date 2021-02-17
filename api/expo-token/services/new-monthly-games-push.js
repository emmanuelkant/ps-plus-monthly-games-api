'use strict';
const axios = require('axios');

const expoAPI = axios.create({
  baseURL: 'https://exp.host',
  headers: {
    Accept: 'application/json',
    'Accept-encoding': 'gzip, deflate',
    'Content-Type': 'application/json',
  },
});

const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms))
};

const newMonthlyGamesPush = async ({
  title = 'The PS Plus already came out 🎮',
  body = 'Click here to know which are they'
}) => {
  const result = await strapi.services['expo-token'].find();

  const message = {
    to: process.env.EXPO_PUSH_TOKEN,
    sound: 'default',
    title,
    body,
    data: {},
  };

  for (const obj of result) {
    message.to = obj.token;
    try {
      await expoAPI.post('/--/api/v2/push/send', message);
      await sleep(200);
    } catch(e) {
      console.error(`An error occurred when tried send a push notification to ${message.to}`);
    }
  }
};

module.exports = { newMonthlyGamesPush };