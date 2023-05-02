require('@nomiclabs/hardhat-waffle');
// Replace this private key with your Bitfinity account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
require('dotenv').config();

const BITFINITY_PRIVATE_KEY = process.env.BITFINITY_PRIVATE_KEY;

task('get-counter', 'Returns the current counter for the provided Incrementer')
  .addParam('incrementeraddress', 'Eth address of Incrementer contract')
  .setAction(async (taskArgs) => {
    const { getCounter } = require('./scripts/utils');
    await getCounter(hre.ethers.provider, taskArgs.incrementeraddress);
  });

task('increment-counter', 'Increments the counter for the provided Incrementer')
  .addParam('incrementeraddress', 'Eth address of Incrementer contract')
  .setAction(async (taskArgs) => {
    const { incrementCounter } = require('./scripts/utils');
    await incrementCounter(hre.ethers.provider, taskArgs.incrementeraddress);
  });

module.exports = {
  solidity: '0.8.0',
  networks: {
    testnet_bitfinity: {
      url: 'https://testnet.bitfinity.network',
      accounts: [`0x${BITFINITY_PRIVATE_KEY}`],
    },
    local_bitfinity: {
      url: 'http://127.0.0.1:8545',
      accounts: [`0x${BITFINITY_PRIVATE_KEY}`],
    },
  },
};
