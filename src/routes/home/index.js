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
  let viewer;

  try {
    const status = await checkLogin(
      api,
      '{ viewer { id profile { id name isAffiliationAuthenticated } } }',
    );

    if (status.data && status.data.viewer) {
      viewer = status.data.viewer;

      if (!viewer.profile || !viewer.profile.isAffiliationAuthenticated) {
        return { redirect: '/auth' };
      }
    } else {
      viewer = null;
    }
  } catch (e) {
    console.error(e);
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
