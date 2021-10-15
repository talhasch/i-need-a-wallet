const ethers = require("ethers");

const main = () => {
    const {address, mnemonic, privateKey} = ethers.Wallet.createRandom();

    const title = "New Wallet";
    console.log("\n");
    console.log(title, "-".repeat(80 - title.length - 1));
    console.log("address:", address);
    console.log("mnemonic:", mnemonic.phrase);
    console.log("private:", privateKey);
    console.log("-".repeat(80));
    console.log("\n");
}

main()
