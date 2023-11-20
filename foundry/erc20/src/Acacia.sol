// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Acacia is ERC20 {
    constructor(uint256 initialSupply) ERC20("Acacia", "ACA") {
        _mint(msg.sender, initialSupply);
    }

    function decimals() public pure override(ERC20) returns (uint8) {
        return 0;
    }
}
