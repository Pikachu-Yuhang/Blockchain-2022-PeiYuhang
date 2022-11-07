import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  // Solidity compiler version
  solidity: "0.8.9",
  networks: {
    ganache: {
      // Change the url according to your ganache configuration
      url: 'http://127.0.0.1:8545',
      // Change these accounts private keys according to your ganache configuration.
      accounts: [
        '6d4e7807e55d23ab91f2abf5938c326eebcee824ba7e105154451ed58d031797',
        'e451203fcd6c37d2b599870af622523e70897fb97be1f22aed34f5eab022df5d',
        'ab38b6d6e4d18a434c4f28f6f7043ea14054858494b7bf272159695965d085d7',
        '4e33c6f50611fedf460873fc65611c9e3cbbc237e1d133eb7ca338f10ef6762b',
      ]
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
};

export default config;
