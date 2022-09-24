/* eslint-disable object-curly-newline */
import React from 'react';
import { uuid } from '@/utils/generator';
import Pagination from '../Pagination';

export type TableProps<T> = {
  title?: string;
  dataSource: T[];
  rowKey?: string;
  pagination: {
    current: number;
    onChange: (page: number) => void;
  };
  columns: {
    title: string;
    dataIndex: string;
    key?: string | number;
    render: (record: T) => React.ReactNode | string | null;
  }[];
  loading: boolean;
};

function Table<T>({ title, dataSource, rowKey, pagination, columns, loading }: TableProps<T>) {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
            {title && <h2>{title}</h2>}
            <div id="table-container">
              <table className="min-w-full divide-y divide-neutral-400">
                <thead className="bg-blue-500">
                  <tr>
                    {(columns || []).map((col) => (
                      <th
                        className="px-6 py-6 text-left text-sm font-medium tracking-wider text-white"
                        key={uuid()}
                      >
                        {col.title}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {!loading && (
                    <>
                      {(dataSource || []).map((data: T | any, idx: number) => (
                        <tr
                          key={data[`${rowKey}`] || uuid()}
                          className={`${
                            idx % 2 === 0 ? 'bg-white' : 'bg-cyan-50'
                          } hover:bg-cyan-100`}
                        >
                          {(columns || []).map((col) => (
                            <td
                              key={col.key || col.dataIndex}
                              className="font-small whitespace-nowrap px-6 py-4 text-sm text-gray-500"
                            >
                              {col.render(data)}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <Pagination current={pagination.current} onChange={pagination.onChange} />
      </div>
    </div>
  );
}

Table.defaultProps = {
  title: '',
  rowKey: undefined,
};

export default Table;
