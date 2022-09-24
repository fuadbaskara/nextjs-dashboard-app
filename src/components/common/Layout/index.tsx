import * as React from 'react';
import Header from './header';

export type LayoutProps = {
  children?: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <div className="mt-20 block bg-slate-100">
        <div className="flex flex-1 flex-col">
          <div className="container mx-auto space-y-4 py-6">{children}</div>
        </div>
      </div>
    </>
  );
}

Layout.defaultProps = {
  children: null,
};

export default Layout;
