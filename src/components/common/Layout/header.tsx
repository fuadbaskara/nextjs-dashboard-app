/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {} from 'react-icons/';
import Image from 'next/future/image';
import Link from 'next/link';

function Header() {
  return (
    <header className="fixed top-0 z-10 block w-full bg-white p-4 shadow shadow-stone-200">
      <div className="w-full px-8">
        <Link href="/">
          <Image
            src="/images/ajaib-logo.png"
            width={320 * 0.48}
            height={118 * 0.48}
            quality={30}
            alt="ajaib-logo"
            className="h-auto w-20 w-[154px]"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
