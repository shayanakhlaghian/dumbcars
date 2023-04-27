import Link from 'next/link';
import Image from 'next/image';

import Nav from '../nav/Nav';

const Header = () => {
  return (
    <header className='fixed top-0 left-0 bg-blue-500 shadow-md w-full h-16 flex justify-between items-center py-2 px-2 lg:px-4 z-50'>
      <Link
        href='/'
        className='w-14 self-stretch relative rounded-md overflow-hidden'
      >
        <Image src='/images/dumbcar-1.png' alt='Dumbcars' fill sizes='100%' />
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
