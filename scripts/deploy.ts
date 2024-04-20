// scripts/deploy.ts
import { ethers } from "hardhat";
import dotenv from 'dotenv';
dotenv.config();

async function main(): Promise<void> {

  // Get the contract owner
  const contractOwner = await ethers.getSigners();
  console.log(`Deploying contract from: ${contractOwner[0].address}`);

  // Hardhat helper to get the ethers contractFactory object
  const ErcToken = await ethers.getContractFactory('ErcToken');

  // Deploy the contract
  console.log('Deploying ERC Token...');
  const tokenName = process.env.TOKEN_NAME ?? "ErcToken"; // Token name
  const tokenSymbol = process.env.TOKEN_SYMBOL ?? "ERC"; // Token symbol
  const tokenDecimals = parseInt(process.env.TOKEN_DECIMAL ?? '18', 10); // Decimals
  const tokenSupply = parseInt(process.env.TOKEN_TOTAL_SUPPLY ?? '1000000', 10); // Total supply
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
