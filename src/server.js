/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import React from 'react';
import ReactDOM from 'react-dom/server';
import PrettyError from 'pretty-error';
import App from './components/App';
import Html from './components/Html';
import { ErrorPageWithoutStyle } from './routes/error/ErrorPage';
import errorPageStyle from './routes/error/ErrorPage.css';
import passport from './passport';
import router from './router';
// import assets from './asset-manifest.json'; // eslint-disable-line import/no-unresolved
import chunks from './chunk-manifest.json'; // eslint-disable-line import/no-unresolved
import config from './config';
import Api from './api';

process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at:', p, 'reason:', reason);
  // send entire app down. Process manager will restart it
  process.exit(1);
});

//
// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------
global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all';

const app = express();
const getApi = req =>
  Api.create({ baseUrl: config.api.serverUrl, headers: req.headers });

//
// If you are using proxy from external machine, you can set TRUST_PROXY env
// Default is to trust proxy headers only from loopback interface.
// -----------------------------------------------------------------------------
app.set('trust proxy', config.trustProxy);

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//
// Authentication
// -----------------------------------------------------------------------------
app.use(passport.initialize());

const socialAuth = `
  mutation login($provider: String!, $accessToken: String!) {
    socialAuth(input: {provider: $provider, accessToken: $accessToken}) {
      viewer {
        id
      }
    }
  }
`;

const login = async (res, api, provider, accessToken) => {
  try {
    const resp = await api.fetch('/graphql', {
      method: 'POST',
      body: JSON.stringify({
        query: socialAuth,
        variables: { provider, accessToken },
      }),
    });

    const { errors } = await resp.json();

    if (errors) {
      console.error(errors, null, 2);
      res.redirect('/login');
      return;
    }

    if (resp.headers.has('set-cookie')) {
      res.set('set-cookie', resp.headers.getAll('set-cookie'));
    } else {
      throw new Error('login failed');
    }

    res.redirect('/');
  } catch (e) {
    console.error(e);
    res.redirect('/login');
  }
};

// facebook
app.get(
  '/login/facebook',
  passport.authenticate('facebook', {
    scope: ['email'],
    session: false,
  }),
);
app.get(
  '/login/facebook/return',
  passport.authenticate('facebook', {
    failureRedirect: '/login',
    session: false,
  }),
  async (req, res) => {
    await login(res, getApi(req), 'facebook', req.user.accessToken);
  },
);

// google
app.get(
  '/login/google',
  passport.authenticate('google', {
    scope: [
      'https://www.googleapis.com/auth/plus.login',
      'https://www.googleapis.com/auth/plus.me',
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile',
    ],
    session: false,
  }),
);
app.get(
  '/login/google/return',
  passport.authenticate('google', {
    failureRedirect: '/login',
    session: false,
  }),
  async (req, res) => {
    await login(res, getApi(req), 'google-oauth2', req.user.accessToken);
  },
);

// kakao
app.get(
  '/login/kakao',
  passport.authenticate('kakao', {
    session: false,
  }),
);
app.get(
  '/login/kakao/return',
  passport.authenticate('kakao', {
    failureRedirect: '/login',
    session: false,
  }),
  async (req, res) => {
    await login(res, getApi(req), 'kakao', req.user.accessToken);
  },
);

// naver
app.get(
  '/login/naver',
  passport.authenticate('naver', {
    session: false,
  }),
);
app.get(
  '/login/naver/return',
  passport.authenticate('naver', {
    failureRedirect: '/login',
    session: false,
  }),
  async (req, res) => {
    await login(res, getApi(req), 'naver', req.user.accessToken);
  },
);

//
// Grahql just forwarding to api server
// -----------------------------------------------------------------------------
app.post('/graphql', async (req, res) => {
  const api = getApi(req);

  res.set('content-type', 'application/json');
  try {
    const resp = await api.fetch('/graphql', {
      method: 'POST',
      body: JSON.stringify(req.body),
    });

    res.send(JSON.stringify(await resp.json()));
  } catch (e) {
    res.send(
      JSON.stringify({
        errors: [
          {
            message: e.message,
          },
        ],
      }),
    );
  }
});

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
app.get('*', async (req, res, next) => {
  try {
    const css = new Set();

    // Enables critical path CSS rendering
    // https://github.com/kriasoft/isomorphic-style-loader
    const insertCss = (...styles) => {
      // eslint-disable-next-line no-underscore-dangle
      styles.forEach(style => css.add(style._getCss()));
    };

    // Global (context) variables that can be easily accessed from any React component
    // https://facebook.github.io/react/docs/context.html
    const context = {
      insertCss,
      // The twins below are wild, be careful!
      pathname: req.path,
      query: req.query,
      // Api
      api: getApi(req),
    };

    const route = await router.resolve(context);

    if (route.redirect) {
      res.redirect(route.status || 302, route.redirect);
      return;
    }

    const data = { ...route };
    data.children = ReactDOM.renderToString(
      <App context={context}>{route.component}</App>,
    );
    data.styles = [{ id: 'css', cssText: [...css].join('') }];

    const scripts = new Set();
    const addChunk = chunk => {
      if (chunks[chunk]) {
        chunks[chunk].forEach(asset => scripts.add(asset));
      } else if (__DEV__) {
        throw new Error(`Chunk with name '${chunk}' cannot be found`);
      }
    };
    addChunk('client');
    if (route.chunk) addChunk(route.chunk);
    if (route.chunks) route.chunks.forEach(addChunk);

    data.scripts = Array.from(scripts);
    data.app = {
      apiUrl: config.api.clientUrl,
    };

    const html = ReactDOM.renderToStaticMarkup(<Html {...data} />);
    res.status(route.status || 200);
    res.send(`<!doctype html>${html}`);
  } catch (err) {
    next(err);
  }
});

//
// Error handling
// -----------------------------------------------------------------------------
const pe = new PrettyError();
pe.skipNodeFiles();
pe.skipPackage('express');

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(pe.render(err));
  const html = ReactDOM.renderToStaticMarkup(
    <Html
      title="Internal Server Error"
      description={err.message}
      styles={[{ id: 'css', cssText: errorPageStyle._getCss() }]} // eslint-disable-line no-underscore-dangle
    >
      {ReactDOM.renderToString(<ErrorPageWithoutStyle error={err} />)}
    </Html>,
  );
  res.status(err.status || 500);
  res.send(`<!doctype html>${html}`);
});

//
// Launch the server
// -----------------------------------------------------------------------------
if (!module.hot) {
  app.listen(config.port, () => {
    console.info(`The server is running at http://localhost:${config.port}/`);
  });
}

//
// Hot Module Replacement
// -----------------------------------------------------------------------------
if (module.hot) {
  app.hot = module.hot;
  module.hot.accept('./router');
}

export default app;
