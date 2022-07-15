async function main() {
    // We get the contract to deploy
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const hello_world = await HelloWorld.deploy("Hello World!");

    await hello_world.deployed();

    console.log("Contract deployed to address:", hello_world.address);

    let message = await hello_world.message()
    console.log(message);

    let txn = await hello_world.update("hello World!");
    await txn.wait();

    message = await hello_world.message()
    console.log(message);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });