var HDWalletProvider = require('truffle-hdwallet-provider');
var mnemonic = process.env.ROPSTEN_MNEMONIC;
var accessToken = process.env.INFURA_ACCESS_TOKEN;

module.exports = {
  networks: {
    ganache: {
      host: 'localhost',
      port: 7545,
      network_id: 5777
    },
    geth: {
      host: 'localhost',
      port: 8545,
      network_id: 1234,
      gas: 500000
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(
          mnemonic,
          'https://ropsten.infura.io/' + accessToken
        );
      },
      network_id: 3,
      gas: 500000
    }
  }
};
