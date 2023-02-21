const { deployProxy } = require('@openzeppelin/truffle-upgrades');

const Contenders = artifacts.require('ContendersEdenGenesisNFT');

module.exports = async function (deployer, network) {
  if (network === 'development') return;

  const instance = await deployProxy(Contenders, { deployer, initializer: "initialize" });
  console.log('Deployed', instance.address);
};
