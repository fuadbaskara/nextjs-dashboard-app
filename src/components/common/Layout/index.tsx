import Head from 'next/head';
import * as React from 'react';
import Header from './header';

export type LayoutProps = {
  children?: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Dashboard - Personal Project</title>
        <meta
          name="description"
          content="Simple Dashboard app build with Nextjs + Typescript + @Redux/toolkit + tailwind and some more."
        />
        <meta name="robots" content="max-image-preview:large" />
      </Head>
      <Header />
      <div className="mt-20 block bg-slate-100">
        <div className="flex w-full flex-1 flex-col">
          <div className="container mx-auto space-y-4 py-6 px-4">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

Layout.defaultProps = {
  children: null,
};

export default Layout;
