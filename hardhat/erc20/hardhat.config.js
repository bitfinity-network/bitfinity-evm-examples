require("@nomiclabs/hardhat-waffle");
require("./tasks/account");
require("./tasks/transfer");
require("./tasks/totalSupply");
require("./tasks/balanceOf");
require("./tasks/approve");
require("./tasks/transferFrom");
// Replace this private key with your Bitfinity account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
require('dotenv').config();

const BITFINITY_PRIVATE_KEY = process.env.BITFINITY_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.0",
  networks: {
    testnet_bitfinity: {
      url: 'https://testnet.bitfinity.dev',
      accounts: [`0x${BITFINITY_PRIVATE_KEY}`],
      chainId: 355113,
    },
    local_bitfinity: {
      url: 'http://127.0.0.1:8545',
      accounts: [`0x${BITFINITY_PRIVATE_KEY}`],
      chainId: 355113,
    },
  }
};

