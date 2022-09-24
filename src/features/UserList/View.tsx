/* eslint-disable operator-linebreak */
import React from 'react';
import Link from 'next/link';
import Table from '@/components/common/Table';
import { columns } from './components/columns';
import useHomeState from './ViewModel';
import Filter from './components/filter';

function UserList() {
  const {
    data,
    page,
    filter,
    loading,
    searchValue,
    onSearch,
    onChangeGender,
    onChangePagination,
    onResetFilter,
    onSort,
  } = useHomeState();

  return (
    <>
      <Link href="/">
        <span className="hover:text-blue-400">Home</span>
      </Link>
      <span className="px-2">/</span>
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl">
        User List
      </h2>
      <Filter
        gender={filter.gender}
        searchValue={searchValue}
        onSearch={onSearch}
        onSelect={onChangeGender}
        onResetFilter={onResetFilter}
      />
      <Table
        dataSource={data}
        columns={columns({ onSort })}
        loading={loading}
        rowKey="cell"
        pagination={{
          current: page,
          onChange: (currPage) => onChangePagination(currPage),
        }}
      />
    </>
  );
}

export default UserList;
