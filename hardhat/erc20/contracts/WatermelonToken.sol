// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract WatermelonToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("Watermelon", "WTM") {
        _mint(msg.sender, initialSupply);
    }

    function decimals() public pure override(ERC20) returns (uint8) {
        return 0;
    }
}
