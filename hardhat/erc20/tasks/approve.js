require('@nomiclabs/hardhat-web3');

task('approve', 'ERC20 approve')
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
    const [sender] = await ethers.getSigners();
    const tx = await watermelon.populateTransaction.approve(spender, amount);

    const txResponse = await sender.sendTransaction({
      nonce: await sender.getTransactionCount(),
      ...tx,
    });

    await txResponse.wait();
    console.log(
      `${sender.address} has approved ${amount} tokens to ${spender}`
    );
  });

module.exports = {};
