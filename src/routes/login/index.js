/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import Login from './Login';
import { getViewer } from '../../api';

const title = '로그인';

async function action({ api }) {
  let viewer = null;

  try {
    viewer = await getViewer(api);

    if (viewer) {
      return { redirect: '/' };
    }
  } catch (e) {
    console.error(e);
  }

  return {
    chunks: ['login'],
    title,
    component: (
      <Layout viewer={viewer}>
        <Login title={title} />
      </Layout>
    ),
  };
}

export default action;
