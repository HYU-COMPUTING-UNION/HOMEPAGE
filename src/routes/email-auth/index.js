import React from 'react';
import Layout from '../../components/Layout';
import EmailAuth from './EmailAuth';
import { getViewer } from '../../api';

async function action({ api, query }) {
  let viewer = null;

  try {
    viewer = await getViewer(api);
  } catch (e) {
    console.error(e);
  }

  if (!query.token) {
    return { redirect: '/not-found' };
  }

  return {
    chunks: ['email-auth'],
    component: (
      <Layout viewer={viewer}>
        <EmailAuth token={query.token} />
      </Layout>
    ),
  };
}

export default action;
