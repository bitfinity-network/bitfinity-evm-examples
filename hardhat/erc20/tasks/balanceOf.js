task("balanceOf", "Total supply of ERC20 token")
.addParam("token", "Token address")
.addParam("account", "Account address")
.setAction(async function ({ token, account }, { ethers: { getSigners } }, runSuper) {
  const watermelonToken = await ethers.getContractFactory("WatermelonToken")
  const watermelon = watermelonToken.attach(token)
  const [minter] = await ethers.getSigners();
  const balance = (await (await watermelon.connect(minter)).balanceOf(account)).toNumber()
  console.log(`Account ${account} has a total token balance:  ${balance} WTM`);
});

module.exports = {};