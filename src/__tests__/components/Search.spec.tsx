/* eslint-disable testing-library/no-node-access */
import React from 'react';
import { render } from '../test-utils';
import Search from '@/components/common/Search';

const renderSearch = () =>
  render(
    <Search
      title="Search"
      name="search"
      placeholder="Search by keyword"
      value=""
      onChange={() => jest.fn()}
    />,
  );

describe('Search Component', () => {
  test('renders correctly with simple props:', () => {
    const { asFragment } = renderSearch();
    const search = document.querySelector('input[name="search"]');
    expect(search).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
