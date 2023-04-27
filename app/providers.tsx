'use client';
import {EthereumClient, w3mConnectors, w3mProvider} from '@web3modal/ethereum';
import {Web3Modal} from '@web3modal/react';
import {configureChains, createClient, WagmiConfig} from 'wagmi';
import {mainnet, polygon, arbitrum, sepolia} from 'wagmi/chains';

const chains = [mainnet, polygon, arbitrum, sepolia];
const projectId = 'DUMBCARS_PROJECT_1234';

const {provider} = configureChains(chains, [w3mProvider({projectId})]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({chains, projectId, version: 1}),
  provider,
});
const ethereumClient = new EthereumClient(wagmiClient, chains);

const Providers = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <WagmiConfig client={wagmiClient}>{children}</WagmiConfig>
      <Web3Modal ethereumClient={ethereumClient} projectId={projectId} />
    </>
  );
};

export default Providers;
