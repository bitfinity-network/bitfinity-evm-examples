// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
import { DeterministicDeployer } from "../src/Deterministic-Deployer";
import { TestToken__factory } from "../typechain";

async function main(): Promise<void> {
  // Hardhat always runs the compile task when running scripts through it.
  // If this runs in a standalone fashion you may want to call compile manually
  // to make sure everything is compiled
  // await run("compile");
  // We get the contract to deploy

  const dep = new DeterministicDeployer(ethers.provider);
  await dep.deployFactory();

  const ctrAddress = DeterministicDeployer.getAddress(TestToken__factory.bytecode);
  if (await dep.isContractDeployed(ctrAddress)) {
    console.log(`Contract already deployed at ${ctrAddress}`);
  } else {
    await dep.deterministicDeploy(TestToken__factory.bytecode);

    console.log(`Deployed Contract at ${ctrAddress}`);
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
