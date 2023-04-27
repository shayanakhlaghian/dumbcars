import type {Url} from 'next/dist/shared/lib/router/router';
import Link from 'next/link';

const NavItem = ({children, href}: {children: React.ReactNode; href: Url}) => {
  return (
    <li className='mx-1 lg:mx-4 hover:bg-gray-100 rounded-sm hover:text-blue-500 py-1 px-2'>
      <Link href={href} className='capitalize lg:text-lg'>
        {children}
      </Link>
    </li>
  );
};

export default NavItem;
