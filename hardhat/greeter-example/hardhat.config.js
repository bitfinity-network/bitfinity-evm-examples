require('@nomiclabs/hardhat-waffle');

// Replace this private key with your Bitfinity account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
require('dotenv').config();

const BITFINITY_PRIVATE_KEY = process.env.BITFINITY_PRIVATE_KEY;

module.exports = {
  solidity: {
    compilers: [
      {
        version: '0.8.0',
      },
      {
        version: '<0.9.0',
        settings: {},
      },
    ],
  },
  networks: {
    testnet_bitfinity: {
      url: 'https://testnet.bitfinity.dev',
      accounts: [`0x${BITFINITY_PRIVATE_KEY}`],
    },
    develop_bitfinity: {
      url: 'http://127.0.0.1:8545',
      accounts: [`0x${BITFINITY_PRIVATE_KEY}`],
    },
  },
};
