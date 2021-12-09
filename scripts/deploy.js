
const { ethers } = require("hardhat");

// async function main() {

//   const SuperMarioWorld = await ethers.getContractFactory("SuperMarioWorldOZ");
//   const superMarioWorld = await SuperMarioWorld.deploy("SuperMarioWorldOZ", "SPRMO");

//   await superMarioWorld.deployed();
//   console.log("Success! Contract was deployed to: ", superMarioWorld.address);

//   await superMarioWorld.mint("https://ipfs.io/ipfs/QmYoVjXNGbAVHKucFJ3xw8MMxWqFXHtyWPLzf4EB8aLW4f");

//   console.log("NFT successfully minted");
// }

async function main() {

  const SuperMarioWorld = await ethers.getContractFactory("SuperMarioWorldERC1155");
  const superMarioWorld = await SuperMarioWorld.deploy("SuperMarioWorldERC1155", "SPRME");

  await superMarioWorld.deployed();
  console.log("Success! Contract was deployed to: ", superMarioWorld.address);

  await superMarioWorld.mint(10, "https://ipfs.io/ipfs/QmUYMgqe6AQVaw2UjYJ2NdAEdRnSB2k6VdMnHjhQ1swvMG");

  console.log("NFT successfully minted");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
