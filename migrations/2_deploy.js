const AnotherEther = artifacts.require('AnotherEther');

module.exports = async (deployer) => {
  await deployer.deploy(AnotherEther, web3.utils.toBN('21000000e18'), {
    gas: 2000000
  });
};
