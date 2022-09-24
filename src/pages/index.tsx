import React, { ReactNode } from 'react';
import UserList from '@/features/UserList/View';

export default function Home(): ReactNode {
  return (
    <div>
      <UserList />
    </div>
  );
}
