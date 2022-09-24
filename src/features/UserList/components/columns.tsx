import React from 'react';
import { User } from '@/api/user/model';

export const columns = [
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
    render: (record: User) => <div>{record.login.username || '-'}</div>,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (record: User) => <div>{`${record.name.first} ${record.name.last}` || '-'}</div>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    render: (record: User) => <div>{record.email || '-'}</div>,
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
    render: (record: User) => <div>{record.gender || '-'}</div>,
  },
  {
    title: 'Registered Date',
    dataIndex: 'registered',
    key: 'registered',
    render: (record: User) => <div>{`${record.registered.date}` || '-'}</div>,
  },
];

export default columns;
