require('dotenv').config()
const { ethers } = require("ethers")

const contractAddress = "0x544926220813B7Cff07cC54C83a1ba9C593F7322"
const HELLO_ABI = [
    "function update(string memory) public",
    "function getMessage() public view returns(string memory)"
]
const provider = new ethers.providers.JsonRpcProvider(`https://opbtest.bsngate.com:18602/api/${process.env.PROJECT_ID}/rpc`)
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)

const hello = async () => {
    try {
        const helloContract = new ethers.Contract(contractAddress, HELLO_ABI, provider)
        const tx = await helloContract.connect(wallet).update("wazap4")
        console.log(tx)
    } catch (err) {
        console.log(err)
    }
}

hello()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });