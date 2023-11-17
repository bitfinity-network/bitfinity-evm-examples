const HDWalletProvider = require('@truffle/hdwallet-provider');
const { default: Web3 } = require('web3');
const NonceTrackerSubprovider = require('web3-provider-engine/subproviders/nonce-tracker');
require('dotenv').config();
const utils = require('web3-utils');
const MNEMONIC = process.env.MNEMONIC;
const hdWalletStartIndex = 0;
const numberOfAddresses = 3;

const setupWallet = (url) => {
  const wallet = new HDWalletProvider({
    mnemonic: MNEMONIC,
    providerOrUrl: url,
    numberOfAddresses,
  });
  mintAccounts(wallet); // This will mint 1 Native Token to each address
  return wallet;
};

const mintAccounts = (wallet) => {
  const addresses = wallet.addresses;

  for (let i = 0; i < addresses.length; i++) {
    const address = addresses[i];
    const amount = utils.toWei('1', 'ether');

    wallet.sendAsync(
      {
        method: 'ic_mintNativeToken',
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
    bitfinity: {
      provider: () => setupWallet('https://testnet.bitfinity.network'),
      network_id: '355113',
      from: setupWallet('https://testnet.bitfinity.network').addresses[0],
      deploymentPollingInterval: 8000,
      timeoutBlocks: 500,
      confirmations: 10,
    },
    local: {
      provider: () => setupWallet('http://127.0.0.1:8545'),
      network_id: '355113',
      from: setupWallet('http://127.0.0.1:8545').addresses[0],
      deploymentPollingInterval: 8000,
      timeoutBlocks: 500,
      disableConfirmationListener: true,
    },
  },
};
