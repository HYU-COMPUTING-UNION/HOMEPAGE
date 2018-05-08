/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../../components/Layout';
import Write from './Write';
import { getViewer, checkEmailAuthentication } from '../../../api';

const title = 'Write Page';

async function action({ api }) {
  let viewer = null;

  try {
    viewer = await getViewer(api);

    if (!viewer) {
      return { redirect: '/login' };
    }

    if (!checkEmailAuthentication(viewer)) {
      return { redirect: '/auth' };
    }
  } catch (e) {
    console.error(e);
    return { redirect: '/' };
  }

  return {
    chunks: ['petitions.write'],
    title,
    component: (
      <Layout viewer={viewer}>
        <Write title={title} />
      </Layout>
    ),
  };
}

export default action;
