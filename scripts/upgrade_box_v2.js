const {ethers, upgrades} = require("hardhat");
const PROXY = "0x2a15571582bB0a36F09B8C4E69ff3616D340C98c";

async function main() {
    const BoxV2 = await ethers.getContractFactory("BoxV2");
    await upgrades.upgradeProxy(PROXY, BoxV2);
    console.log("Box upgraded");
}
main();

