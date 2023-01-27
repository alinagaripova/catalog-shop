import Web3 from "web3";

const web3 = new Web3(Web3.givenProvider);

export const getAccount = async () => {
  const accounts = await web3.eth.requestAccounts();
  return accounts[0];
}