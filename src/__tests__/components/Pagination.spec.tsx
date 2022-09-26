/* eslint-disable testing-library/no-node-access */
import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '../test-utils';
import Pagination from '@/components/common/Pagination';

const renderSearch = () =>
  render(
    <Pagination current={1} onChange={(currPage) => jest.fn(() => currPage)} />,
  );

describe('Layout Wrapper Component', () => {
  test('renders correctly with simple props:', () => {
    const { asFragment } = renderSearch();
    const paginationBtn1 = screen.getByTestId('page-1-btn');
    const paginationBtn5 = screen.getByTestId('page-5-btn');
    const paginationPrevBtn = screen.getByTestId('prev-page-btn');
    const paginationNextBtn = screen.getByTestId('next-page-btn');
    expect(paginationBtn1).toBeInTheDocument();
    expect(paginationBtn5).toBeInTheDocument();
    expect(paginationPrevBtn).toBeInTheDocument();
    expect(paginationNextBtn).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
