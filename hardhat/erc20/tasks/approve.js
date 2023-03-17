require("@nomiclabs/hardhat-web3");

task("approve", "ERC20 approve")
    .addParam("token", "Token address")
    .addParam("spender", "Spender address")
    .addParam("amount", "Token amount")
    .setAction(async function ({ token, spender, amount }, { ethers: { getSigners } }, runSuper) {
        const watermelonToken = await ethers.getContractFactory("WatermelonToken")
        const watermelon = watermelonToken.attach(token)
        const [sender] = await ethers.getSigners();
        await (await watermelon.connect(sender).approve(spender, amount)).wait()
        console.log(`${sender.address} has approved ${amount} tokens to ${spender}`);
    });

module.exports = {};