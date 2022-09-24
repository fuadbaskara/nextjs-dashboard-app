/* eslint-disable operator-linebreak */
import React from 'react';
import Table from '@/components/common/Table';
import { columns } from './components/columns';
import useHomeState from './ViewModel';
import Filter from './components/filter';

function UserList() {
  const { data, page, filter, loading, onSearch, onChangeGender, onChangePagination } =
    useHomeState();

  return (
    <>
      <Filter gender={filter.gender} onSearch={onSearch} onChangeSelect={onChangeGender} />
      <Table
        dataSource={data}
        pagination={{
          current: page,
          onChange: (currPage) => onChangePagination(currPage),
        }}
        columns={columns}
        loading={loading}
      />
    </>
  );
}

export default UserList;
