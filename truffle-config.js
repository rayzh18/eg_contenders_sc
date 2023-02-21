const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

const privateKey = process.env.PRIVATE_KEY;

module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*",
        },
        eth_goerli: {
            provider: () => new HDWalletProvider(privateKey, `https://maximum-shy-needle.ethereum-goerli.quiknode.pro/5aa8bdca199ee59f6729345db51f6fa76478962a/`),
            network_id: 5,
            confirmations: 3,
            networkCheckTimeout: 100000000,
            timeoutBlocks: 200000,
            skipDryRun: true
        },
        eth_mainnet: {
            provider: () => new HDWalletProvider(privateKey, `https://polished-quick-river.quiknode.pro/ef954b2482fb31e05a2df3eca383633d4db58b2a/`),
            network_id: 1,
            confirmations: 3,
            networkCheckTimeout: 100000000,
            timeoutBlocks: 200000,
            skipDryRun: true
        },

        'truffle-dashboard': {
            url: "http://localhost:24012/rpc"
        }
    },
    contracts_directory: './contracts/',
    api_keys: {
        etherscan: process.env.ETHERSCAN,
    },

    plugins: [
        'truffle-plugin-verify'
    ],

    mocha: {
        // timeout: 100000
    },

    compilers: {
        solc: {
            version: "0.8.17",    // Fetch exact version from solc-bin (default: truffle's version)
            // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
            // settings: {          // See the solidity docs for advice about optimization and evmVersion
            //  optimizer: {
            //    enabled: false,
            //    runs: 200
            //  },
            //  evmVersion: "byzantium"
            // }
        }
    }
};