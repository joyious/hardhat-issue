describe("Hardhat issue demo", function () {
  let storage;
  before(async function () {
    storage = await (await ethers.getContractFactory("Storage")).deploy();
    await storage.deployed();

    await hre.network.provider.send("evm_setAutomine", [false]);
  });

  it("Should be able to include many transctions in 1 blcok", async function () {
    let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let txs = await Promise.all(
      values.map(async (value) => await storage.store(value))
    );

    console.log(txs);

    // Mine the block
    await hre.network.provider.request({
      method: "evm_mine",
      params: [],
    });

    const pendingBlock = await network.provider.send("eth_getBlockByNumber", [
      "pending",
      false,
    ]);
    console.log(pendingBlock);

    // let receipts = await Promise.all(txs.map(async (tx) => tx.wait()));
    // console.log(receipts);
  });
});
