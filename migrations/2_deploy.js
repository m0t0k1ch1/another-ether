const AnotherEther = artifacts.require('./AnotherEther.sol')

module.exports = (deployer) => {
  let supply = 21000000e18
  deployer.deploy(AnotherEther, supply, {
    gas: 2000000
  })
}
