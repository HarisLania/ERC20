// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ErcToken is ERC20 {
    constructor(
        string memory tokenName,
        string memory tokenSymbol,
        uint8 tokenDecimals,
        uint256 tokenSupply
    ) ERC20(tokenName, tokenSymbol) {
        _mint(msg.sender, tokenSupply * (10 ** uint256(tokenDecimals)));
    }
}
