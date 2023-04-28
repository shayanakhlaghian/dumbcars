import type {ChangeEvent, FormEvent} from 'react';
import {useState} from 'react';
import {usePrepareContractWrite, useContractWrite} from 'wagmi';
import {ethers} from 'ethers';

import Button from '../ui/Button';
import {contractAddress, abi} from '~/DumbCarsNFT.json';
import {WagmiError} from '~/types';

const MintForm = () => {
  const [counts, setCounts] = useState(1);
  const value = 0.01 * counts;

  const {config, error} = usePrepareContractWrite({
    address: contractAddress as `0x${string}`,
    abi,
    functionName: 'mint',
    args: [counts],
    overrides: {
      value: ethers.utils.parseEther(value.toString()),
    },
  });
  const {write} = useContractWrite(config);

  const handleCountsChange = (e: ChangeEvent<HTMLInputElement>) =>
    setCounts(parseInt(e.target.value, 10));

  const handleMint = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    write?.();
  };

  const errorReason = (error as WagmiError)?.reason;
  const errorMessage = errorReason?.split(':')[1];

  return (
    <form className='flex flex-col items-center' onSubmit={handleMint}>
      <input
        type='number'
        min={1}
        step={1}
        value={counts}
        onChange={handleCountsChange}
        className='text-gray-800 py-1 px-3 mb-4'
      />
      <Button>Mint</Button>
      {error && (
        <p className='mt-8 text-red-800 font-bold border-b-2 pb-1 border-red-800'>
          {errorMessage}
        </p>
      )}
    </form>
  );
};

export default MintForm;
