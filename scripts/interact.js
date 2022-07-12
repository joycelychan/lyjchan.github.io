const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

// Read the contract ABI
const contract = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json");

// provider - Alchemy
const alchemyProvider = new ethers.providers.AlchemyProvider(network = "goerli", API_KEY);
// const provider = new ethers.providers.JsonRpcProvider(http://localhost:7545);

// signer - you
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);
// const signer0 = provider.getSigner(0);

// contract instance
const helloWorldContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
    const message = await helloWorldContract.message();
    console.log("The original message is: " + message);

    console.log("Updating the message...");
    const tx = await helloWorldContract.update("this is the new message");
    await tx.wait();

    const newMessage = await helloWorldContract.message();
    console.log("The new message is: " + newMessage);
}

main();