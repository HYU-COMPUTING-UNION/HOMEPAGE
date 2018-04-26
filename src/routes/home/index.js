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
  let viewer = null;

  try {
    const status = await checkLogin(api);

    if (status.data && status.data.viewer) {
      viewer = status.data.viewer;

      if (!viewer.profile || !viewer.profile.isAffiliationAuthenticated) {
        return { redirect: '/auth' };
      }
    }
  } catch (e) {
    console.error(e);
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
