import React from 'react';
import Layout from '../../components/Layout';
import Auth from './Auth';
import { getViewer, checkEmailAuthentication } from '../../api';

async function action({ api }) {
  let viewer = null;

  try {
    viewer = await getViewer(api);

    if (viewer && checkEmailAuthentication(viewer)) {
      return { redirect: '/' };
    }
  } catch (e) {
    console.error(e);
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
