const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();
const numberOfAddresses = 3;
const MNEMONIC = process.env.MNEMONIC;

const setupWallet = (url) => {
  const wallet = new HDWalletProvider({
    mnemonic: MNEMONIC,
    providerOrUrl: url,
    numberOfAddresses,
  });

  mintAccounts(wallet);
  return wallet;
};

const mintAccounts = (wallet) => {
  const addresses = wallet.addresses;

  for (let i = 0; i < addresses.length; i++) {
    const address = addresses[i];
    const amount = utils.toWei('1', 'ether');

    wallet.sendAsync(
      {
        method: 'ic_mintEVMToken',
        params: [address, amount],
        id: 1,
        jsonrpc: '2.0',
      },
      (_) => {}
    );
  }
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
      provider: () => setupWallet('https://testnet.bitfinity.network'),
      network_id: '355113',
      from: setupWallet('https://testnet.bitfinity.network').addresses[0],
      deploymentPollingInterval: 8000,
      timeoutBlocks: 500,
      disableConfirmationListener: true,
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    timeout: 100000,
    useColors: true,
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
