const Random = artifacts.require('VRFV2RandomGeneration');

module.exports = async function (deployer, network) {
  if (network === 'development') return;

  deployer.deploy(Random);
};
