'use strict';
const axios = require('axios');

const expoAPI = axios.create({
  baseURL: 'https://exp.host',
  headers: {
    Accept: 'application/json',
    'Accept-encoding': 'gzip, deflate',
    'Content-Type': 'application/json',
  }
});

const newMonthlyGamesPush = async ({
  title = 'The PS Plus already came out 🎮',
  body = 'Click here to know which are they'
}) => {
  const message = {
    to: process.env.EXPO_PUSH_TOKEN,
    sound: 'default',
    title,
    body,
    data: {},
  };

  try {
    return await expoAPI.post('/--/api/v2/push/send', message);
  } catch(e) {
    return { status: 500, data: { status: e.message } };
  }
};

module.exports = { newMonthlyGamesPush };