import React from 'react';
import { screen } from '@testing-library/react';
import Button from '@/components/common/Button';
import { render } from '../test-utils';

const renderBtn = () => render(<Button>Click me</Button>);

describe('Button Component', () => {
  test('renders correctly with simple props:', () => {
    const { asFragment } = renderBtn();
    expect(screen.getByText('Click me')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
