import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '@/components/common/Button';

describe('Button Component', () => {
  test('renders correctly with simple props:', () => {
    render(<Button>Click me</Button>);

    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
