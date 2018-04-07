pragma solidity ^0.4.18;

import "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract AnotherEther is StandardToken {
  string public name = "AnotherEther";
  string public symbol = "AETH";
  uint public decimals = 18;

  function AnotherEther(uint initialSupply) public {
    totalSupply_ = initialSupply;
    balances[msg.sender] = initialSupply;
  }
}
