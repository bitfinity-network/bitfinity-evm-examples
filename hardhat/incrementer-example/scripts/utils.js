require('dotenv').config();
const hre = require('hardhat');

async function getCounter(provider, incrementerAddress) {
  incrementerAddress = hre.ethers.utils.getAddress(incrementerAddress);

  const Incrementer = await hre.ethers.getContractFactory('Incrementer');
  const incrementer = Incrementer.attach(incrementerAddress);

  console.log(
    'Current counter value in Incrementer: ',
    (await incrementer.getCounter()).toString()
  );
}

async function incrementCounter(provider, incrementerAddress) {
  incrementerAddress = hre.ethers.utils.getAddress(incrementerAddress);

  const deployerWallet = new hre.ethers.Wallet(
    process.env.BITFINITY_PRIVATE_KEY,
    provider
  );

  console.log('Sending transaction with the account:', deployerWallet.address);

  console.log(
    'Account balance:',
    (await deployerWallet.getBalance()).toString()
  );

  const Incrementer = await hre.ethers.getContractFactory('Incrementer');
  const options = {
    gasLimit: 1000000,
    nonce: await deployerWallet.getTransactionCount(),
  };

  const incrementer =
    Incrementer.attach(incrementerAddress).connect(deployerWallet);

  console.log(
    'Counter value in Incrementer before incrementation: ',
    (await incrementer.getCounter()).toString()
  );

  console.log('Increment the counter..');
  const tx = await incrementer.populateTransaction.increment();
  const txResponse = await deployerWallet.sendTransaction({
    nonce: await deployerWallet.getTransactionCount(),
    ...tx,
  });

  await txResponse.wait();

  console.log(
    'Counter value in Incrementer after incrementation: ',
    (await incrementer.getCounter()).toString()
  );
}

exports.getCounter = getCounter;
exports.incrementCounter = incrementCounter;
