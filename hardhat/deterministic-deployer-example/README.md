# Deterministic Deployer for Hardhat Example

This example shows how to deploy a contract to Bitfinity network using deterministic deployer. It uses Arachnid deployer found [here](<https://github.com/Arachnid/deterministic-deployment-proxy>).

## About

This project is a Hardhat project. It is ready to compile and deploy smart contracts locally and on Bitfinity network.

It uses:

- [Hardhat](https://github.com/nomiclabs/hardhat): compile and run the smart contracts on a local development network
- [TypeChain](https://github.com/ethereum-ts/TypeChain): generate TypeScript types for smart contracts
- [Ethers](https://github.com/ethers-io/ethers.js/): renowned Ethereum library and wallet implementation

## Usage

### Pre Requisites

Before running any command, make sure to install dependencies:

```sh
yarn install
```

### Compile

Compile the smart contracts with Hardhat:

```sh
yarn compile
```

### Deploy contract to network

```sh
npx hardhat run --network bitfinity ./scripts/deploy.ts
```

## Thanks

If you like it than you shoulda put a start ⭐ on it

## License

MIT
