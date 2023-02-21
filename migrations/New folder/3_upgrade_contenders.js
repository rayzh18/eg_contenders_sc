const { upgradeProxy } = require('@openzeppelin/truffle-upgrades');

const Contenders = artifacts.require('ContendersEdenGenesisNFT');

module.exports = async function (deployer, network) {
  if (network === 'development') return;

  const instance = await Contenders.deployed();
  console.log('Address is', instance.address);
  await upgradeProxy(instance.address, Contenders, { deployer });
};
