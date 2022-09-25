/* eslint-disable testing-library/no-node-access */
import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { store } from '@/store';
import UserList from '@/features/UserList/View';
import { render } from '@/__tests__/test-utils';

const renderUserList = () => render(<UserList />);

// room for improvement: use data-testid (getByTest / getBytTestId)
// instead of getByPlaceholderText, or DOM querySelector

describe('UserList Component test case: ', () => {
  test('render UserList to match snapshot:', () => {
    const { asFragment } = renderUserList();
    expect(asFragment()).toMatchSnapshot();
  });

  test('Search functionality:', () => {
    renderUserList();
    const searchInput = screen.getByPlaceholderText('Search by keyword');
    expect(searchInput).toBeInTheDocument();
    fireEvent.input(searchInput, { target: { value: 'Test' } });
    expect(searchInput).toHaveValue('Test');
  });

  test('Select gender:', () => {
    renderUserList();
    const selectGender = document.querySelector('select[name="gender"]');
    expect(selectGender).toBeInTheDocument();
    fireEvent.change(selectGender as Element, { target: { value: 'female' } });
    expect(selectGender).toHaveValue('female');
  });

  test('Test pagination:', () => {
    renderUserList();

    // test pagination page 1 btn (expected output: 1)
    const paginationBtn1 = screen.getByTestId('page-1-btn');
    expect(paginationBtn1).toBeInTheDocument();
    fireEvent.click(paginationBtn1);
    expect(paginationBtn1).toHaveClass('bg-blue-100');
    expect(store.getState().filter.filter.page).toEqual(1);

    // test pagination page 5 btn (expected output: 5)
    const paginationBtn5 = screen.getByTestId('page-5-btn');
    expect(paginationBtn5).toBeInTheDocument();
    fireEvent.click(paginationBtn5);
    expect(paginationBtn5).toHaveClass('bg-blue-100');
    expect(store.getState().filter.filter.page).toEqual(5);

    // set back to page 1
    fireEvent.click(paginationBtn1);
    expect(paginationBtn1).toHaveClass('bg-blue-100');
    expect(store.getState().filter.filter.page).toEqual(1);

    // test pagination prev btn before page 1 (expected output: 1)
    const paginationPrevBtn = screen.getByTestId('prev-page-btn');
    expect(paginationPrevBtn).toBeInTheDocument();
    fireEvent.click(paginationPrevBtn);
    expect(store.getState().filter.filter.page).toEqual(1);

    // test pagination next btn after page 1 (expected output: 2)
    const paginationNextBtn = screen.getByTestId('next-page-btn');
    expect(paginationNextBtn).toBeInTheDocument();
    fireEvent.click(paginationNextBtn);
    expect(store.getState().filter.filter.page).toEqual(2);

    // test pagination next btn after page 5 (expected output: 6)
    fireEvent.click(paginationBtn5);
    expect(paginationBtn5).toHaveClass('bg-blue-100');
    expect(store.getState().filter.filter.page).toEqual(5);
    fireEvent.click(paginationNextBtn);
    expect(store.getState().filter.filter.page).toEqual(6);
  });

  test('Table data:', async () => {
    renderUserList();
    const tableRows = document.querySelectorAll('tr');
    expect(tableRows).toHaveLength(1);
  });
});

describe('UserList Redux integration test case: ', () => {
  test('Table data:', async () => {
    renderUserList();
    // coming soon!
  });
});
