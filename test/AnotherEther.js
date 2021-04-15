const { expect } = require("chai");

describe("AnotherEther contract", () => {
  let AETH;

  let aeth;

  let deployer;

  beforeEach(async () => {
    AETH = await ethers.getContractFactory("AnotherEther");
    aeth = await AETH.deploy();
    [deployer] = await ethers.getSigners();
  });

  describe("deployment", () => {
    it("initial state", async () => {
      expect(await aeth.name()).to.equal("AnotherEther");
      expect(await aeth.symbol()).to.equal("AETH");
      expect(await aeth.totalSupply()).to.equal(21000000);
      expect(await aeth.decimals()).to.equal(18);
      expect(await aeth.balanceOf(deployer.address)).to.equal(21000000);
    });
  });
});
