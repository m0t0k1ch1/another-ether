const { expect } = require("chai");

describe("AnotherEther contract", () => {
  let AETH;

  beforeEach(async () => {
    AETH = await ethers.getContractFactory("AnotherEther");

    aeth = await AETH.deploy();
  });

  describe("deployment", () => {
    it("initial state", async () => {
      expect(await aeth.name()).to.equal("AnotherEther");
      expect(await aeth.symbol()).to.equal("AETH");
      expect(await aeth.totalSupply()).to.equal(21000000);
    });
  });
});
