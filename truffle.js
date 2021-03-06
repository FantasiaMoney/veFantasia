require('babel-register');
require('babel-polyfill');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
      gasLimit: 90060000,
      gas: 12000000
    }
  },
  compilers: {
     solc: {
       version: "0.7.5",  // ex:  "0.7.5". (Default: Truffle's installed solc)
       optimizer: {
       enabled: true,
       runs: 200
      }
    }
  }
};
