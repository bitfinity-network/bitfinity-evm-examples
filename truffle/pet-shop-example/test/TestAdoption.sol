pragma solidity ^0.5.16;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Adoption.sol";

contract TestAdoption {
    Adoption adoption = Adoption(DeployedAddresses.Adoption());

    // Testing the Adopt function
    function testUserCanAdoptPet() public {
        uint returnedId = adoption.adopt(8);
        uint expected = 8;

        Assert.equal(returnedId, expected, "Adoption of pet ID 8 should be recorded.");
    }

    // Testing the retrieval of single pet's owner
    function testGetAdopterAddressByPetId() public {
        // Expected owner is this contract's address
        address expected = address(this);
        address adopter = adoption.adopters(8);
        Assert.equal(adopter, expected, "Owner of pet ID 8 should be recorded.");
    }

    // Testing retrieval of all pet owners
    function testGetAdopterAddressByPetIdInArray () public {
        // Expected owner is this contract
        address expected = address(this);

        // Store adopters in memory rather than contract's storage
        address[16] memory adopters = adoption.getAdopters();

        Assert.equal(adopters[8], expected, "Owner of pet ID 8 should be recorded.");
    }
}