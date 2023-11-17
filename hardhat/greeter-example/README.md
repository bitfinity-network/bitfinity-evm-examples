# Hardhat Greeter Example

## Configuration

Add your Bitfinity Private key (from Metamask) to __.env__ file: <br/>
`$ echo "BITFINITY_PRIVATE_KEY=YOUR_BITFINITY_PRIVATE_KEY_HERE" >> .env`

## Mint Native Tokens

The following BITFINITY endpoint will mint some native tokens for you so that you can execute the deployment and the transactions.

```bash
curl -X POST -H "Content-Type: application/json" -d '{"jsonrpc":"2.0","method":"ic_mintNativeToken","params":["YOUR_ADDRESS", "AMOUNT_IN_HEX"],"id":1}' https://testnet.bitfinity.network
```

## Interaction

To deploy the contract run: <br/>
`$ make deploy`

Optionally you can specify any of the following networks: __testnet_bitfinity__, __localhost_bitfinity__, like this:
`$ make deploy NETWORK=testnet_bitfinity`
