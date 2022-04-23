const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("AToken", function () {
  it("Should return owner of a token", async function () {
    const {owner}  = await ethers.getSigners();
    const AToken = await ethers.getContractFactory("AToken");
    const atoken = await AToken.deploy("Hello, world!");
    await atoken.deployed();
    const owneradress = await atoken.owner();

    expect(owneradress).to.equal(owner.adress);
  });
});
