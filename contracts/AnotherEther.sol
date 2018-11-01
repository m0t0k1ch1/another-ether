pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";

contract AnotherEther is ERC20, ERC20Detailed {
  constructor(uint supply) ERC20Detailed("AnotherEther", "AETH", 18) public {
    _mint(msg.sender, supply);
  }
}
