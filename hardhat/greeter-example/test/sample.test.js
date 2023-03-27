const { expect } = require('chai');
const hre = require('hardhat');
describe('Greeter', function () {
  it("Should return the new greeting once it's changed", async function () {
    const provider = hre.ethers.provider;
    const deployerWallet = new hre.ethers.Wallet(
      process.env.BITFINITY_PRIVATE_KEY,
      provider
    );
    const Greeter = await hre.ethers.getContractFactory('Greeter');
    const greeter = await Greeter.deploy('Hello, world!', {
      nonce: await deployerWallet.getTransactionCount(),
    });

    await greeter.deployed();
    expect(await greeter.greet()).to.equal('Hello, world!');

    await greeter.setGreeting('Hola, mundo!');
    expect(await greeter.greet()).to.equal('Hola, mundo!');
  }, 20_000);
});
