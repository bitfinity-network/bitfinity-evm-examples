const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {abi, bytecode} = require('../build/contracts/Migrations.json');
const provider = new HDWalletProvider('hat reason appear skin twelve tag monster account sniff grid pulp river', 'https://rpc.testnet.bitfinity.dev:8545');
const web3 = new Web3(provider);
web3.setProvider(provider); // <=======================

const deploy = async () => {
    await web3.eth.getAccounts().then(async (accounts) => {
        console.log('attempting to deploy from account',accounts[0]);
        const result = await new web3.eth.Contract(JSON.parse(abi))
        .deploy({ data:'0x'+ bytecode,arguments:[] })
        .send({ gas:'1000000',from:accounts[0]} );

        console.log('contract deployed at', result.options.address);
    })
};
deploy();


