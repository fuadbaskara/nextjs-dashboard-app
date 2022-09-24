import React, { ReactNode } from 'react';
import UserList from '@/features/UserList/View';
import Layout from '@/components/common/Layout';

export default function Home(): ReactNode {
  return (
    <Layout>
      <UserList />
    </Layout>
  );
}
