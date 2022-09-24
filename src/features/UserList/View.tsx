/* eslint-disable operator-linebreak */
import React from 'react';
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
