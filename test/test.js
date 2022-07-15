const { expect } = require("chai");

describe("HelloWorld", function () {
    it("Should return the new greeting once it's changed", async function () {
        const HelloWorld = await ethers.getContractFactory("HelloWorld");
        const hello_world = await HelloWorld.deploy("Hello, world!");

        expect(await hello_world.message()).to.equal("Hello, world!");

        const txn = await hello_world.update("Hola, mundo!");

        // wait until the transaction is mined
        await txn.wait();

        expect(await hello_world.message()).to.equal("Hola, mundo!");
    });
});