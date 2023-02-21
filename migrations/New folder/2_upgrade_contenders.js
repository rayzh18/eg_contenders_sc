const { upgradeProxy } = require('@openzeppelin/truffle-upgrades');

const Contenders = artifacts.require('ContendersEdenGenesisNFT');

module.exports = async function (deployer, network) {
  if (network === 'development') return;

  const instance = await upgradeProxy("0x8fD2d9435e391717cB794CE4aAe8d3A739b9C84b", Contenders, { deployer });
  console.log('Upgraded >>', instance.address);
};
