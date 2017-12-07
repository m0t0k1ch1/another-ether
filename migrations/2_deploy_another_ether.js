const AnotherEther = artifacts.require('./AnotherEther.sol')

module.exports = (deployer) => {
  let initialSupply = 21000000e18
  deployer.deploy(AnotherEther, initialSupply, {
    gas: 2000000
  })
}
