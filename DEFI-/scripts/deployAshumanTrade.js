
const { ethers } = require("hardhat");

async function main() {
    const signerAddress = "0xeA29891b492Bd2bb13ab2a57C35650762D2d38e4";
    const ashumanToken  = "0xf3Bc7ac6B5486fb7ea647A97fA6D17F609Bd62D9";
    const AshumonTrade = await hre.ethers.getContractFactory("AshumonTrade");
    const ashTrade = await AshumonTrade.deploy(ashumanToken, signerAddress );
    await ashTrade.deployed();
    console.log("ashmonTrade deployed to:", ashTrade.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
