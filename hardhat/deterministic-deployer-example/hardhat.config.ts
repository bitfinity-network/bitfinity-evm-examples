import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import { config as dotenvConfig } from "dotenv";
import { resolve } from "path";
dotenvConfig({ path: resolve(__dirname, "./.env") });


const PRIVATE_KEY = process.env.PRIVATE_KEY || "";


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
    },
    bitfinity: {
      url: "https://testnet.bitfinity.network",
      accounts: ["0x"+ PRIVATE_KEY],
      chainId: 355113,
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      accounts: ["0x" + PRIVATE_KEY],
      chainId: 355113,
    }
  },
  solidity: {
    compilers: [
      {
        version: "0.8.20",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  typechain: {
    outDir: "typechain",
    target: "ethers-v5",
  },
};

export default config;
