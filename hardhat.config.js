require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require('dotenv').config()

module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "hellox",
  networks: {
    devnet: {
      url: "https://opbtest.bsngate.com:18602/api/839a671afb47429cb2b3dd663e68220c/rpc",
      accounts: ["0xe32fce3c3d1ebbb3070708e364d8287d6cc0b28dcd836ed74a34bb1f53b4b0d2"],
      gasPrice: "auto",
      gas: "auto",
    },
    hellox: {
      url: `https://opbtest.bsngate.com:18602/api/${process.env.PROJECT_ID}/rpc`,
      accounts: [process.env.PRIVATE_KEY],
      gasPrice: "auto",
      gas: "auto",
    },
  }
};