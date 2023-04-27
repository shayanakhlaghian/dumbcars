import SocialItem from './SocialItem';

const Footer = () => {
  const socialItems: {id: string; text: string; href: string}[] = [
    {
      id: 'si1',
      text: 'Twitter',
      href: 'https://twitter.com',
    },
    {
      id: 'si2',
      text: 'Opensea',
      href: 'https://opensea.io',
    },
    {
      id: 'si3',
      text: 'Etherscan',
      href: 'https://etherscan.io',
    },
  ];

  return (
    <footer className='bg-blue-500 p-8 flex flex-col justify-center items-center'>
      <h2 className='relative z-50 mb-4 text-xl uppercase md:text-2xl lg:text-3xl lg:mb-8'>
        Dumbcars
      </h2>
      <ul className='flex'>
        {socialItems.map(({id, href, text}) => (
          <SocialItem key={id} href={href}>
            {text}
          </SocialItem>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
