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
import Petitions from './Petitions';
import { getViewer, checkEmailAuthentication } from '../../api';

const title = '청원제목';

async function action({ api, params }) {
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
    chunks: ['petitions'],
    title,
    component: (
      <Layout viewer={viewer}>
        <Petitions title={title} viewer={viewer} petitionId={params.id} />
      </Layout>
    ),
  };
}

export default action;
