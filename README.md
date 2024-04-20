# ERC20 SMART CONTRACT

This project utilizes TypeScript alongside Hardhat for development. Leveraging OpenZeppelin’s ERC20 contract library, it extends its functionality to suit the project's requirements. The contract is deployed on the SEPOLIA Testnet. Additionally, basic interactions with the smart contract are implemented, along with accompanying test cases. Moreover, the token is imported into MetaMask for seamless integration with Ethereum wallets.

## Usage

1. **Installation**: Clone the repository and install dependencies:
    ```bash
    git clone https://github.com/HarisLania/ERC20.git
    cd ERC20
    npm install
    npm install --force
    ```

2. **Environment Variables**: Create a `.env` file in the root directory and add the following values:
    ```bash
    INFURA_URL=your_infura_url
    PRIVATE_KEY=your_private_key
    TOKEN_NAME=your_token_name
    TOKEN_SYMBOL=your_token_symbol
    TOKEN_DECIMAL=your_token_decimal
    TOKEN_TOTAL_SUPPLY=your_token_supply
    ```

3. **Compile Contracts**: Compile smart contracts using Hardhat:
    ```bash
    npx hardhat compile
    ```

4. **Run Test Cases**: Execute the test case command to verify if everything is functioning correctly:
    ```bash
    npx hardhat test
    ```

5. **MetaMask Private Key**: Steps to obtain your MetaMask private key:
    1. Install the MetaMask extension: [MetaMask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn)
    2. Create a MetaMask account
    3. Go to Account Details
    4. Click on 'Show Private Key'
    5. Copy the key and paste it into the `.env` file under 'PRIVATE_KEY'

6. **SEPOLIA Endpoint**: Steps to obtain the SEPOLIA endpoint:
    1. Go to [Infura](https://www.infura.io/)
    2. Create an INFURA Account
    3. Go to Key and Copy the SEPOLIA Endpoint
    4. Paste it into the `.env` file under 'INFURA_URL'

7. **SEPOLIA Faucet**: Steps to obtain SEPOLIA faucet to deploy the contract:
    1. Go to MetaMask wallet and add SEPOLIA ETH in the network
    2. Copy the receive address
    3. Go to [SEPOLIA Faucet](https://sepolia-faucet.pk910.de/#/)
    4. Paste the address and claim the test faucet

8. **Deploy Contract**: Deploy the contract:
    ```bash
    npx hardhat run --network sepolia scripts/deploy.ts
    ```

9. **Verify Contract Deployment**: Steps to verify the contract deployment:
    ```bash
    1. Go to [SEPOLIA Etherscan](https://sepolia.etherscan.io/)
    2. Copy the deployed address from the terminal
    3. Paste it and check if the token exists
    ```

Once deployed, you can import this token into your MetaMask wallet and interact with it. Additionally, for further information, consider referring to the following articles:

### References

- [ERC20 using Hardhat: A Comprehensive Guide](https://medium.com/@kaishinaw/erc20-using-hardhat-a-comprehensive-guide-3211efba98d4)
- [ERC20 Token Hardhat](https://semaphoreci.com/blog/erc20-token-hardhat)

Feel free to explore these resources for additional insights and guidance.
