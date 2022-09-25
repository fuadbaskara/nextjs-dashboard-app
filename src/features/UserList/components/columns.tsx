import React from 'react';
import { User } from '@/api/user/model';
import { SortOrder } from '@/api/models';
import { dateToString } from '@/utils/datetime';

type ColumnProps = {
  onSort: (orderBy: string, sortOrder: SortOrder) => void;
};

export const columns = ({ onSort }: ColumnProps) => {
  return [
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
      render: (record: User) => (
        <div>{`${record.name.first} ${record.name.last}` || '-'}</div>
      ),
      sorter: (orderBy: string, sortOrder: SortOrder) =>
        onSort(orderBy, sortOrder),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: (record: User) => <div>{record.email || '-'}</div>,
      sorter: (orderBy: string, sortOrder: SortOrder) =>
        onSort(orderBy, sortOrder),
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
      render: (record: User) => <div>{record.gender || '-'}</div>,
      sorter: (orderBy: string, sortOrder: SortOrder) =>
        onSort(orderBy, sortOrder),
    },
    {
      title: 'Registered Date',
      dataIndex: 'date',
      key: 'date',
      render: (record: User) => (
        <div>
          {record.registered.date
            ? dateToString(`${record.registered.date}`)
            : '-'}
        </div>
      ),
      sorter: (orderBy: string, sortOrder: SortOrder) =>
        onSort(orderBy, sortOrder),
    },
  ];
};

export default columns;
