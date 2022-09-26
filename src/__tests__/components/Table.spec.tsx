/* eslint-disable testing-library/no-node-access */
import React from 'react';
import { render } from '../test-utils';
import Table from '@/components/common/Table';
import { SortOrder } from '@/api/models';
import { dateToString } from '@/utils/datetime';
import { mockUser } from '../../__mocks__/mock-data/user-list';
import { User } from '@/api/user/model';

const userList: User[] = mockUser.results;

type Props = {
  onSort: (sortBy: string, sortOrder: SortOrder) => void;
};

const onSorting = (sortBy: string, sortOrder: SortOrder) => {
  jest.fn(() => {
    return { sortBy, sortOrder };
  });
};

const columns = ({ onSort }: Props) => {
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

const renderTable = () =>
  render(
    <Table
      dataSource={userList}
      columns={columns({ onSort: onSorting })}
      loading={false}
      rowKey="cell"
      pagination={{
        current: 1,
        onChange: (currPage) => jest.fn(() => currPage),
      }}
    />,
  );

describe('Table Component', () => {
  test('renders Table correctly with props:', () => {
    renderTable();
    const tableRows = document.querySelectorAll('tr');
    expect(tableRows).toHaveLength(11);

    const { asFragment } = renderTable();
    expect(asFragment()).toMatchSnapshot();
  });
});
