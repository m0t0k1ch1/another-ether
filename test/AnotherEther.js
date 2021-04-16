const { expect } = require("chai");

describe("AnotherEther contract", () => {
  const totalSupply = ethers.BigNumber.from("21000000000000000000000000");

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
      expect(await aeth.totalSupply()).to.equal(totalSupply);
      expect(await aeth.decimals()).to.equal(18);
      expect(await aeth.balanceOf(deployer.address)).to.equal(totalSupply);
    });
  });
});
