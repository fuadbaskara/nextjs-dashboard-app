/* eslint-disable testing-library/no-node-access */
import React from 'react';
import { render } from '../test-utils';
import Select from '@/components/common/Select';

const options = [
  {
    label: 'All',
    value: '',
  },
  {
    label: 'Male',
    value: 'male',
  },
  {
    label: 'Female',
    value: 'female',
  },
];

const renderSelect = () =>
  render(
    <Select
      title="Gender"
      name="gender"
      value="male"
      options={options}
      defaultValue="all"
      onChange={() => jest.fn()}
    />,
  );

describe('Select Component', () => {
  test('renders correctly with simple props:', () => {
    const { asFragment } = renderSelect();
    const select = document.querySelector('select[name="gender"]');
    expect(select).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
