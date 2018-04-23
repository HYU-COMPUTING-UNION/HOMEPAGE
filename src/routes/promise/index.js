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
import Promise from './Promise';

const title = '소프트웨어융합대학으로 한 걸음';

function action() {
  return {
    chunks: ['promise'],
    title,
    component: (
      <Layout>
        <Promise title={title} />
      </Layout>
    ),
  };
}

export default action;
