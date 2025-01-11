require("@nomicfoundation/hardhat-toolbox");

const NEXT_PUBLIC_POLYGON_MUMBAI_RPC = "https://rpc.ankr.com/eth_holesky";
const NEXT_PUBLIC_PRIVATE_KEY = "YOUR_PRIVATE_KEY";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "ETH",
  networks: {
    // hardhat: {
    //   chainId: 31337,
    // },
    holesky: {
      url: NEXT_PUBLIC_POLYGON_MUMBAI_RPC,
      accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
    },
  },
};
