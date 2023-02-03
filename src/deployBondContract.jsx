import Web3 from 'web3';
import ContractAbi from 'contracts/ContractAbi.json'
const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/7595b57a6a2b4525af46db520cbd15cf'));
const Web3 = require('web3')

const contractAddress = "0x853B8A5682a277b04e2a0e714046d3977b188391C"; // Address of the contract on the blockchain

const contract = new web3.eth.Contract(ContractAbi, contractAddress);

// Call a function on the contract
contract.methods.myFunction().call((error, result) => {
  if (error) {
    console.error(error);
  } else {
    console.log(result);
  }
});

