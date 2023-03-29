const HDWalletProvider = require('@truffle/hdwallet-provider');
const NonceTrackerSubprovider = require('web3-provider-engine/subproviders/nonce-tracker');
const utils = require('web3-utils');
require('dotenv').config();
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const setupWallet = (url) => {
  return new HDWalletProvider({
    privateKeys: [PRIVATE_KEY],
    providerOrUrl: url,
    numberOfAddresses: 3,
    shareNonce: true,
  });
};

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*', // Match any network id
    },
    local: {
      provider: () => setupWallet('http://127.0.0.1:8545'),
      network_id: '355113',
      from: setupWallet('http://127.0.0.1:8545').addresses[0],
      deploymentPollingInterval: 8000,
      timeoutBlocks: 500,
      disableConfirmationListener: true,
    },
    bitfinity: {
      provider: () => setupWallet('https://testnet.bitfinity.dev'),
      network_id: '355113',
      from: setupWallet('https://testnet.bitfinity.dev').addresses[0],
      deploymentPollingInterval: 8000,
      timeoutBlocks: 500,
      disableConfirmationListener: true,
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    timeout: 100000,
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: '0.8.1', // Fetch exact version from solc-bin (default: truffle's version)
      docker: false, // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {
        // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: false,
          runs: 200,
        },
        evmVersion: 'byzantium',
      },
    },
  },
};
