/* eslint-disable object-curly-newline */
import React, { useEffect, useState } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import clsx from 'clsx';
import { uuid } from '@/utils/generator';
import Pagination from '../Pagination';
import { useAppSelector } from '@/hooks';
import { filterSelector } from '@/store/slices/filter';
import { SortOrder } from '@/api/models';

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
    sorter?: (orderBy: string, sortOrder: SortOrder) => void;
    render: (record: T) => React.ReactNode | string | null;
  }[];
  loading: boolean;
};

function Table<T>({ title, dataSource, rowKey, pagination, columns, loading }: TableProps<T>) {
  const { filter } = useAppSelector(filterSelector);
  const [sort, setSort] = useState({ by: '', order: '' });

  useEffect(() => {
    if (!filter.sortBy && !filter.sortOrder) setSort({ by: '', order: '' });
  }, [filter.sortBy, filter.sortOrder]);

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
                        <div className="flex items-center justify-between">
                          <span>{col.title}</span>
                          {col.sorter && (
                            <span>
                              <AiFillCaretUp
                                className={clsx(
                                  sort.by === col.dataIndex && sort.order === 'ascend'
                                    ? 'text-blue-900'
                                    : '',
                                  'hover:cursor-pointer',
                                )}
                                onClick={() => {
                                  if (col.sorter) {
                                    setSort({
                                      by: col.dataIndex,
                                      order: 'ascend',
                                    });
                                    col.sorter(col.dataIndex, 'ascend');
                                  }
                                }}
                              />
                              <AiFillCaretDown
                                className={clsx(
                                  sort.by === col.dataIndex && sort.order === 'descend'
                                    ? 'text-blue-900'
                                    : '',
                                  'hover:cursor-pointer',
                                )}
                                onClick={() => {
                                  if (col.sorter) {
                                    setSort({
                                      by: col.dataIndex,
                                      order: 'descend',
                                    });
                                    col.sorter(col.dataIndex, 'descend');
                                  }
                                }}
                              />
                            </span>
                          )}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                {!loading && (
                  <tbody>
                    {(dataSource || []).map((data: T | any, idx: number) => (
                      <tr
                        key={data[`${rowKey}`] || uuid()}
                        className={`${idx % 2 === 0 ? 'bg-white' : 'bg-cyan-50'} hover:bg-cyan-100`}
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
                  </tbody>
                )}
              </table>
              {loading && (
                <div className="flex h-80 w-full items-center justify-center">
                  <span className="text-xl">Loading...</span>
                </div>
              )}
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
