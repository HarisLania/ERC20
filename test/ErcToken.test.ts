import { expect } from 'chai';
import { ethers } from "hardhat";

// Start test block
describe('ErcToken', function () {
  before(async function () {
    this.ErcToken = await ethers.getContractFactory('ErcToken');
  });

  beforeEach(async function () {
    this.tokenName = "ErcToken"; // Token name
    this.tokenSymbol = "ERC"; // Token symbol
    this.tokenDecimals = 18; // Decimals
    this.tokenSupply = 1000000; // Total supply
    this.ercToken = await this.ErcToken.deploy(this.tokenName, this.tokenSymbol, this.tokenDecimals, this.tokenSupply);
    await this.ercToken.deployed();

    this.decimals = await this.ercToken.decimals();

    const signers = await ethers.getSigners();

    this.ownerAddress = signers[0].address;
    this.recipientAddress = signers[1].address;

    this.signerContract = this.ercToken.connect(signers[1]);
  });

  // Test cases
  it('Creates a token with a name', async function () {
    expect(await this.ercToken.name()).to.exist;
    expect(await this.ercToken.name()).to.equal(this.tokenName);
  });

  it('Creates a token with a symbol', async function () {
    expect(await this.ercToken.symbol()).to.exist;
    expect(await this.ercToken.symbol()).to.equal(this.tokenSymbol);
  });

  it('Has a valid decimal', async function () {
    expect((await this.ercToken.decimals()).toString()).to.equal(this.tokenDecimals.toString());
  })

  it('Has a valid total supply', async function () {
    const expectedSupply = ethers.utils.parseUnits(this.tokenSupply.toString(), this.decimals);
    expect((await this.ercToken.totalSupply()).toString()).to.equal(expectedSupply);
  });

  it('Is able to query account balances', async function () {
    const ownerBalance = await this.ercToken.balanceOf(this.ownerAddress);
    expect(await this.ercToken.balanceOf(this.ownerAddress)).to.equal(ownerBalance);
  });

  it('Transfers the right amount of tokens to/from an account', async function () {
    const transferAmount = 1000;
    const ownerBalanceBefore = await this.ercToken.balanceOf(this.ownerAddress);
    const recipientBalanceBefore = await this.ercToken.balanceOf(this.recipientAddress);

    await this.ercToken.transfer(this.recipientAddress, transferAmount);

    const ownerBalanceAfter = await this.ercToken.balanceOf(this.ownerAddress);
    const recipientBalanceAfter = await this.ercToken.balanceOf(this.recipientAddress);

    // Use BigNumber for arithmetic operations
    const expectedOwnerBalanceAfter = ownerBalanceBefore.sub(transferAmount);
    const expectedRecipientBalanceAfter = recipientBalanceBefore.add(transferAmount);

    // Separate assertions for owner and recipient balances
    expect(ownerBalanceAfter).to.equal(expectedOwnerBalanceAfter, 'Owner balance should decrease by transfer amount');
    expect(recipientBalanceAfter).to.equal(expectedRecipientBalanceAfter, 'Recipient balance should increase by transfer amount');
  });

});
