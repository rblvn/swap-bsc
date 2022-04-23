const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("AToken", function () {
  it("Should return owner of a token", async function () {
    const [owner]  = await ethers.getSigners();
    const AToken = await ethers.getContractFactory("AToken");
    const atoken = await AToken.deploy();
    await atoken.deployed();
    const owneraddress = await atoken.owner();

    expect(owneraddress).to.equal(owner.address);
  });
});
