const {ethers, upgrades} = require("hardhat");
const PROXY = {proxy_address};
//const PROXY = "0x1bF8AffD9948600f5F0b4421D1e617a93A7CE45D";

async function main() {
    const BoxV2 = await ethers.getContractFactory("BoxV2");
    await upgrades.upgradeProxy(PROXY, BoxV2);
    console.log("Box Proxy upgraded");
}
main();

