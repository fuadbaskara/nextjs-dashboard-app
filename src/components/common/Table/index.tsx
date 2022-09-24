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
    <div>
      {title && <h2>{title}</h2>}
      <div id="table-container">
        <table>
          <thead>
            <tr>
              {(columns || []).map((col) => (
                <th key={uuid()}>{col.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {!loading && (
              <>
                {(dataSource || []).map((data: T | any) => (
                  <tr key={data[`${rowKey}`] || uuid()}>
                    {(columns || []).map((col) => (
                      <td key={col.key || col.dataIndex}>{col.render(data)}</td>
                    ))}
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
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
