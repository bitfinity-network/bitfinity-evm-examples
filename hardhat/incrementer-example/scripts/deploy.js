// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
require('dotenv').config();
const hre = require('hardhat');

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  const provider = hre.ethers.provider;
  const deployerWallet = new hre.ethers.Wallet(
    process.env.BITFINITY_PRIVATE_KEY,
    provider
  );

  console.log('Deploying contracts with the account:', deployerWallet.address);

  console.log(
    'Account balance:',
    (await deployerWallet.getBalance()).toString()
  );

  const Incrementer = await hre.ethers.getContractFactory('Incrementer');
  const options = {
    gasLimit: 1000000,
    nonce: await deployerWallet.getTransactionCount(),
  };
  const startValue = 0;
  const incrementer = await Incrementer.connect(deployerWallet).deploy(
    startValue,
    options
  );
  await incrementer.deployed();

  console.log('Incrementer deployed to:', incrementer.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
