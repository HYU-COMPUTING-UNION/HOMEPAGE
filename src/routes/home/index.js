/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';
import { checkLogin } from '../../api';

async function action({ api }) {
  const status = await checkLogin(api);
  let viewer;

  if (status.data) {
    viewer = status.data.viewer;
  } else {
    viewer = null;
  }

  return {
    title: 'React Starter Kit',
    chunks: ['home'],
    component: (
      <Layout viewer={viewer}>
        <Home viewer={viewer} />
      </Layout>
    ),
  };
}

export default action;
