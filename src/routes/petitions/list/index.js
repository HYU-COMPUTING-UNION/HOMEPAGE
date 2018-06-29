/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import List from './List';
import Layout from '../../../components/Layout';
import { getViewer, checkEmailAuthentication } from '../../../api';

async function action({ api }) {
  let viewer = null;

  try {
    viewer = await getViewer(api);

    if (viewer && !checkEmailAuthentication(viewer)) {
      return { redirect: '/auth' };
    }
  } catch (e) {
    console.error(e);
  }

  return {
    title: 'React Starter Kit',
    chunks: ['petitions/list'],
    component: (
      <Layout viewer={viewer}>
        <List viewer={viewer} />
      </Layout>
    ),
  };
}

export default action;
