const HDWalletProvider = require('@truffle/hdwallet-provider')
const NonceTrackerSubprovider = require('web3-provider-engine/subproviders/nonce-tracker')
const utils = require('web3-utils')
const MNEMONIC = process.env.MNEMONIC
const hdWalletStartIndex = 0
const numberOfAddresses = 3

const setupWallet = (url) => {
  return new HDWalletProvider({
    mnemonic: MNEMONIC,
    providerOrUrl: url,
    numberOfAddresses
  });
}

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    bitfinity: {
      provider: () => setupWallet('https://testnet.bitfinity.dev'),
      network_id: '355113',
      from: setupWallet('https://testnet.bitfinity.dev').addresses[0],
      deploymentPollingInterval: 8000,
      timeoutBlocks: 500,
      confirmations: 10,
    },
    testnet: {
      provider: () => setupWallet('http://localhost:8545'),
      network_id: 0x56b29,
      from: '0x6A33382de9f73B846878a57500d055B981229ac4',
    },
  }
};
