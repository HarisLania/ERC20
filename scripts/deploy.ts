// scripts/deploy.ts
import { ethers } from "hardhat";

async function main(): Promise<void> {

  // Get the contract owner
  const contractOwner = await ethers.getSigners();
  console.log(`Deploying contract from: ${contractOwner[0].address}`);

  // Hardhat helper to get the ethers contractFactory object
  const ErcToken = await ethers.getContractFactory('ErcToken');

  // Deploy the contract
  console.log('Deploying ERC Token...');
  const tokenName = "ErcToken"; // Token name
  const tokenSymbol = "ERC"; // Token symbol
  const tokenDecimals = 18; // Decimals
  const tokenSupply = 1000000; // Total supply
  const ercToken = await ErcToken.deploy(tokenName, tokenSymbol, tokenDecimals, tokenSupply);
  await ercToken.deployed();
  console.log(`ERC Token deployed to: ${ercToken.address}`);
  const totalSupply = await ercToken.totalSupply();
  const decimals = await ercToken.decimals();
  console.log(`Total Supply: ${ethers.utils.formatUnits(totalSupply, decimals)}`);
}

main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exitCode = 1;
  });
