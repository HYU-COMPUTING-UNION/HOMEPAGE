import React from 'react';
import Layout from '../../components/Layout';
import Auth from './Auth';
import { checkLogin } from '../../api';

async function action({ api }) {
  let viewer;

  try {
    const status = await checkLogin(
      api,
      '{ viewer { id profile { id isAffiliationAuthenticated } } }',
    );

    if (status.data && status.data.viewer) {
      viewer = status.data.viewer;

      if (viewer.profile && viewer.isAffiliationAuthenticated) {
        return { redirect: '/' };
      }
    } else {
      viewer = null;
    }
  } catch (e) {
    console.error(e);
    viewer = null;
  }

  return {
    chunks: ['auth'],
    component: (
      <Layout viewer={viewer}>
        <Auth />
      </Layout>
    ),
  };
}

export default action;
