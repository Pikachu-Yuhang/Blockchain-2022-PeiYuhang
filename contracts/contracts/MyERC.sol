// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MyERC20 is ERC20 {

    uint32 constant INITIAL_POINTS = 100;

    mapping(address => bool) claimList;

    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
        _mint(msg.sender, 10000);
    }

    function claimPoints() public {
        require(claimList[msg.sender] != true, "You cannot claim points!");
        ERC20._mint(msg.sender, INITIAL_POINTS);
        claimList[msg.sender] = true;
    }

    function isClaimed() public view returns (bool) {
        return claimList[msg.sender];
    }
}

contract MyERC721 is ERC721 {
    mapping(address => bool) canClaimedList;
    mapping(address => bool) claimedList;

    constructor(string memory name, string memory symbol) ERC721(name, symbol) {
        _mint(msg.sender, 100);
    }

    function claimSouviner(address addr) public {
        require(canClaimedList[addr] == true && claimedList[addr] != true, "You cannot more souviner!");
        ERC721._mint(addr, 1);
        claimedList[addr] = true;
    }

    function canClaimSouviner(address addr) public {
        canClaimedList[addr] = true;
    }

    function ifCanClaimSouviner(address addr) public view returns (bool) {
        return (canClaimedList[addr] && (claimedList[addr] != true));
    }
}