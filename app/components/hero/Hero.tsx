'use client';
import {useWeb3Modal} from '@web3modal/react';
import {useAccount} from 'wagmi';

import Button from '../ui/Button';
import MintForm from './MintForm';

const Hero = () => {
  const {open} = useWeb3Modal();
  const {status} = useAccount();

  return (
    <section>
      <div className='text-center translate-y-20 [&>*]:mb-8 md:translate-y-28 lg:translate-y-40 lg:[&>*]:mb-12'>
        <h1 className='text-xl uppercase md:text-2xl lg:text-4xl'>
          These cars are dumb af!
        </h1>
        <p className='md:text-lg lg:text-xl'>
          Connect your wallet and mint your dumb cars
        </p>
        {status !== 'connected' && <Button onClick={open}>Connect</Button>}
        {status === 'connected' && <MintForm />}
      </div>
    </section>
  );
};

export default Hero;
