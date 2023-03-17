NETWORK=testnet_bitfinity
INCREMENTER_ADDRESS=

deploy:
	yarn hardhat run scripts/deploy.js --network $(NETWORK)

get-counter:
	yarn hardhat get-counter --network $(NETWORK) --incrementer-address $(INCREMENTER_ADDRESS)

increment-counter:
	yarn hardhat increment-counter --network $(NETWORK) --incrementer-address $(INCREMENTER_ADDRESS)
