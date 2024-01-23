// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "forge-std/Script.sol";
import "../src/Acacia.sol";


contract AcaciaScript is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);

        Acacia token = new Acacia(10000000000000000000);

        vm.stopBroadcast();
    }
}