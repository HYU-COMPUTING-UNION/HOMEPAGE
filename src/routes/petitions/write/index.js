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
import { checkLogin } from '../../../api';

const title = 'Write Page';

async function action({ api }) {
  let viewer = null;

  try {
    const { login, data } = await checkLogin(api);

    if (!login) {
      return { redirect: '/login' };
    }
    if (data) {
      if (data.viewer) {
        viewer = data.viewer;

        if (!viewer.profile || !viewer.profile.isAffiliationAuthenticated) {
          return { redirect: '/auth' };
        }
      } else {
        return { redriect: '/' };
      }
    }
  } catch (e) {
    console.error(e);
    return { redirect: '/' };
  }

  return {
    chunks: ['admin'],
    title,
    component: (
      <Layout viewer={viewer}>
        <Write title={title} />
      </Layout>
    ),
  };
}

export default action;
