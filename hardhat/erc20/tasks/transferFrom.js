task('transferFrom', 'ERC20 transferFrom')
  .addParam('token', 'Token address')
  .addParam('sender', 'Sender address')
  .addParam('amount', 'Token amount')
  .setAction(async function (
    { token, sender, amount },
    { ethers: { getSigners } },
    runSuper
  ) {
    const watermelonToken = await ethers.getContractFactory('WatermelonToken');
    const watermelon = watermelonToken.attach(token);
    const [recipient] = await ethers.getSigners();

    const tx = await watermelon.populateTransaction.transferFrom(
      sender,
      recipient.address,
      amount
    );
    const txResponse = await recipient.sendTransaction({
      nonce: await recipient.getTransactionCount(),
      ...tx,
    });

    await txResponse.wait();

    console.log(
      `${recipient.address} has received ${amount} tokens from ${sender}`
    );
  });

module.exports = {};
