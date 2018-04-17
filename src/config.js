/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable max-len */
const path = require('path');
const env = require('node-env-file');
const fs = require('fs');

if (process.env.BROWSER) {
  throw new Error(
    'Do not import `config.js` from inside the client-side code.',
  );
}

const secret = JSON.parse(fs.readFileSync(path.resolve('secret.json'), 'utf8'));

if (__DEV__) {
  env(path.resolve('.env.development'), { overwrite: true });
  Object.entries(secret.env.dev).forEach(([key, value]) => {
    process.env[key] = value;
  });
} else {
  env(path.resolve('.env.production'), { overwrite: true });
  Object.entries(secret.env.prod).forEach(([key, value]) => {
    process.env[key] = value;
  });
}

module.exports = {
  // Node.js app
  port: process.env.PORT || 3000,

  // https://expressjs.com/en/guide/behind-proxies.html
  trustProxy: process.env.TRUST_PROXY || 'loopback',

  // API Gateway
  api: {
    // API URL to be used in the client-side code
    clientUrl: process.env.API_CLIENT_URL || '',
    // API URL to be used in the server-side code
    serverUrl:
      process.env.API_SERVER_URL ||
      `http://localhost:${process.env.PORT || 3000}`,
  },

  // Database
  databaseUrl: process.env.DATABASE_URL || 'sqlite:database.sqlite',

  // Web analytics
  analytics: {
    // https://analytics.google.com/
    googleTrackingId: process.env.GOOGLE_TRACKING_ID, // UA-XXXXX-X
  },

  // Authentication
  auth: {
    // https://developers.facebook.com/
    facebook: {
      id: process.env.FACEBOOK_APP_ID || '186244551745631',
      secret:
        process.env.FACEBOOK_APP_SECRET || 'a970ae3240ab4b9b8aae0f9f0661c6fc',
    },

    // https://cloud.google.com/console/project
    google: {
      id:
        process.env.GOOGLE_CLIENT_ID ||
        '251410730550-ahcg0ou5mgfhl8hlui1urru7jn5s12km.apps.googleusercontent.com',
      secret: process.env.GOOGLE_CLIENT_SECRET || 'Y8yR9yZAhm9jQ8FKAL8QIEcd',
    },

    // https://developers.kakao.com
    kakao: {
      id: process.env.KAKAO_CLIENT_ID,
      secret: process.env.KAKAO_CLIENT_SECRET,
    },

    // https://developers.naver.com
    naver: {
      id: process.env.NAVER_CLIENT_ID,
      secret: process.env.NAVER_CLIENT_SECRET,
    },
  },
};
