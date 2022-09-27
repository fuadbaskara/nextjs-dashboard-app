import React, { lazy, ReactNode } from 'react';
import Layout from '@/components/common/Layout';

const UserList = lazy(() => import('@/features/UserList/View'));

export default function Home(): ReactNode {
  return (
    <Layout>
      <UserList />
    </Layout>
  );
}
