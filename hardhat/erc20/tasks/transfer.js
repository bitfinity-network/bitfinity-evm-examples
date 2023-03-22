require('@nomiclabs/hardhat-web3');

task('transfer', 'ERC20 transfer')
  .addParam('token', 'Token address')
  .addParam('spender', 'Spender address')
  .addParam('amount', 'Token amount')
  .setAction(async function (
    { token, spender, amount },
    { ethers: { getSigners } },
    runSuper
  ) {
    const watermelonToken = await ethers.getContractFactory('WatermelonToken');
    const watermelon = watermelonToken.attach(token);
    const [minter] = await ethers.getSigners();

    const tx = await watermelon.populateTransaction.transfer(spender, amount);
    const txResponse = await minter.sendTransaction({
      nonce: await minter.getTransactionCount(),
      ...tx,
    });

    await txResponse.wait();

    console.log(
      `${minter.address} has transferred ${amount} tokens to ${spender}`
    );
  });

module.exports = {};
