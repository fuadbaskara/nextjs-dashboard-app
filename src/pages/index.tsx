import React, { lazy, ReactNode } from 'react';
import Head from 'next/head';
import Layout from '@/components/common/Layout';

const UserList = lazy(() => import('@/features/UserList/View'));

export default function Home(): ReactNode {
  return (
    <Layout>
      <Head>
        <title>Ajaib - Personal Project</title>
        <meta name="robots" content="max-image-preview:large" />
      </Head>
      <UserList />
    </Layout>
  );
}
