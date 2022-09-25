import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import UserList from '../../features/UserList/View';

const renderUserList = () =>
  render(
    <Provider store={store}>
      <UserList />
    </Provider>,
  );

describe('Render UserList', () => {
  test('render UserList to match snapshot:', () => {
    const { asFragment } = renderUserList();
    expect(asFragment()).toMatchSnapshot();
  });
});
