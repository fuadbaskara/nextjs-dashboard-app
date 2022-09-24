import React, { ReactNode } from 'react';
import Head from 'next/head';
import UserList from '@/features/UserList/View';
import Layout from '@/components/common/Layout';

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
