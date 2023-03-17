//SPDX-License-Identifier: Unlicense
pragma solidity 0.8;

import "hardhat/console.sol";

contract Incrementer {
    address creator;
    uint counter;

    constructor(uint startValue) {
        creator = msg.sender;
        counter = startValue;
    }

    function increment() public
    {
        console.log("Changing counter from '%u' to '%u'", counter, counter + 1);
        counter = counter + 1;
    }

    function getCounter() public view returns (uint)
    {
        return counter;
    }

    function destruct() public
    {
        // Destroys this contract and sends remaining funds back to creator
        if (msg.sender == creator)
            selfdestruct(payable(creator));
    }
}
