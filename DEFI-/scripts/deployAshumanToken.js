
const { ethers } = require("hardhat");

async function main() {
    const Ashumon = await hre.ethers.getContractFactory("Ashumon");
    const ash = await Ashumon.deploy("ashmon","ash");
    await ash.deployed();
    console.log("ashmon deployed to:", ash.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
