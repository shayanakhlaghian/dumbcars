import type {Url} from 'next/dist/shared/lib/router/router';

import NavItem from './NavItem';

const Nav = () => {
  const navItems: {id: string; text: string; href: Url}[] = [
    {
      id: 'ni1',
      text: 'About',
      href: '/about',
    },
    {
      id: 'ni2',
      text: 'Dumbcars',
      href: '/about/dumbcars',
    },
  ];

  return (
    <nav>
      <ul className='flex'>
        {navItems.map(({id, text, href}) => (
          <NavItem key={id} href={href}>
            {text}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
