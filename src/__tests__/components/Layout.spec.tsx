/* eslint-disable testing-library/no-node-access */
import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '../test-utils';
import Layout from '@/components/common/Layout';

const renderLayout = () =>
  render(
    <Layout>
      <div>Some Component</div>
    </Layout>,
  );

describe('Layout Wrapper Component', () => {
  test('renders correctly with simple children component:', () => {
    const { asFragment } = renderLayout();
    expect(screen.getByText('Some Component')).toBeInTheDocument();
    expect(document.querySelector('img')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
