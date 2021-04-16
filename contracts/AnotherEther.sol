// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract AnotherEther is ERC20 {
    constructor() ERC20("AnotherEther", "AETH") {
        _mint(msg.sender, 21000000 * 10**18);
    }
}
