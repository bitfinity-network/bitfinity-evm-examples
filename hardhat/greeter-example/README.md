# Hardhat Greeter Example

## Configuration

Add your Bitfinity Private key (from Metamask) to __.env__ file: <br/>
`$ echo "BITFINITY_PRIVATE_KEY=YOUR_BITFINITY_PRIVATE_KEY_HERE" >> .env`

## Interaction

To deploy the contract run: <br/>
`$ make deploy`

Optionally you can specify any of the following networks: __testnet_bitfinity__, __develop_bitfinity__, __ropsten__ like this:
`$ make deploy NETWORK=testnet_bitfinity`

