async function main() {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();

    console.log("Deploying contracts with account:", deployer.address);
    console.log("Account balance:", accountBalance.toString());

    // We get the contract to deploy
    const HelloWorld = await hre.ethers.getContractFactory("HelloWorld");
    const hello_world = await HelloWorld.deploy("Hello World!");

    await hello_world.deployed();

    console.log("Contract deployed to address:", hello_world.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });