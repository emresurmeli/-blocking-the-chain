var ProofOfExistence1 = artifacts.require('../contracts/ProofOfExistence1.sol');
var ProofOfExistence2 = artifacts.require('../contracts/ProofOfExistence2.sol');
var ProofOfExistence3 = artifacts.require('../contracts/ProofOfExistence3.sol');

module.exports = function(deployer) {
  deployer.deploy(ProofOfExistence1);
  deployer.deploy(ProofOfExistence2);
  deployer.deploy(ProofOfExistence3);
};