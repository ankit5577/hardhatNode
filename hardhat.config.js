require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    hardhat: {
      chainId: 5577,
      allowUnlimitedContractSize: true,
      forking: {
        url: "https://polygon.llamarpc.com",
      },
      live: true,
      mining: { auto: true },
      loggingEnabled: true,
      // accounts: {
      //   mnemonic: process.env.MNEMONICS,
      //   path: "m/44'/60'/0'/0",
      //   initialIndex: 0,
      //   count: 10,
      //   passphrase: "",
      //   accountsBalance: "10000000000000000000000",
      // },
    }
  },
};
