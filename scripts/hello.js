require('dotenv').config()
const { ethers } = require("ethers")

const contractAddress = "0x544926220813B7Cff07cC54C83a1ba9C593F7322" // change this to your own
const HELLO_ABI = [
    "function update(string memory) public",
    "function getMessage() public view returns(string memory)"
]
const provider = new ethers.providers.JsonRpcProvider(`https://opbtest.bsngate.com:18602/api/${process.env.PROJECT_ID}/rpc`)
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)

const updateMessage = async (msg) => {
    try {
        const helloContract = new ethers.Contract(contractAddress, HELLO_ABI, provider)
        const tx = await helloContract.connect(wallet).update(msg)
        console.log(tx)
    } catch (err) {
        console.log(err)
    }
}

const getMessage = async () => {
    try {
        const helloContract = new ethers.Contract(contractAddress, HELLO_ABI, provider)
        const message = await helloContract.connect(wallet).getMessage()
        console.log(message)
    } catch (err) {
        console.log(err)
    }
}

// updateMessage("update-me")
getMessage()
