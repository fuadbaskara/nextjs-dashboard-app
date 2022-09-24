import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import Button from '@/components/common/Button';
import cls from './pagination.module.scss';

export type PaginationProps = {
  current: number;
  onChange: (page: number) => void;
};

function Pagination({ current, onChange }: PaginationProps) {
  const [pageNumbers, setPageNumbers] = useState<number[]>([1, 2, 3, 4, 5]);
  const [selectedPage, setSelectedPage] = useState<number>(1);

  const onClickPageNumber = (page: number) => {
    setSelectedPage(page);
  };

  const onClickPrev = () => {
    const newPageNumbers = pageNumbers;
    if (current > 1) {
      if (current === pageNumbers[0]) {
        newPageNumbers.unshift(current - 1);
        newPageNumbers.pop();
        setPageNumbers(newPageNumbers);
        setSelectedPage(current - 1);
      } else setSelectedPage(current - 1);
    }
  };

  const onClickNext = () => {
    const newPageNumbers = pageNumbers;
    if (current >= 1) {
      if (current === pageNumbers[pageNumbers.length - 1]) {
        newPageNumbers.push(current + 1);
        newPageNumbers.shift();
        setPageNumbers(newPageNumbers);
        setSelectedPage(current + 1);
      } else setSelectedPage(current + 1);
    }
  };

  useEffect(() => {
    onChange(selectedPage);
  }, [onChange, selectedPage]);

  return (
    <ul className={cls.pagination}>
      <li>
        <Button
          className="inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
          type="button"
          onClick={onClickPrev}
        >
          <AiOutlineLeft />
        </Button>
      </li>
      {pageNumbers.map((page) => (
        <li key={page}>
          <Button
            onClick={() => onClickPageNumber(page)}
            className={clsx(
              page === current
                ? 'z-10 border-indigo-500 bg-indigo-50 text-indigo-600'
                : 'border-gray-300 bg-white text-gray-500 hover:bg-gray-50',
              'inline-flex items-center border px-4 py-1.5 text-sm font-medium',
            )}
          >
            {page}
          </Button>
        </li>
      ))}
      <li>
        <Button
          className="inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
          type="button"
          onClick={onClickNext}
        >
          <AiOutlineRight />
        </Button>
      </li>
    </ul>
  );
}

export default Pagination;
