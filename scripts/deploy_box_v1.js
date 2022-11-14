const {ethers, upgrades} = require("hardhat");

async function main() {
    const Box = await ethers.getContractFactory("Box");
    const box = await upgrades.deployProxy(Box, [67], {initializer: "initval2"});
    await box.deployed();
    console.log("Box Proxy deployed to: ", box.address);
}
main();