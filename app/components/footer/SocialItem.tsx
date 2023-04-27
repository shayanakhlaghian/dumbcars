import type {Url} from 'next/dist/shared/lib/router/router';
import Link from 'next/link';

const SocialItem = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: Url;
}) => {
  return (
    <li className='mx-2 hover:text-gray-200 lg:mx-4'>
      <Link href={href} className='md:text-lg'>
        {children}
      </Link>
    </li>
  );
};

export default SocialItem;
