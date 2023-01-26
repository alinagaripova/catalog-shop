import Web3 from "web3";

export const getAccount = async () => {
  const web3 = new Web3(Web3.givenProvider);
  const accounts = await web3.eth.requestAccounts();
  return accounts[0];
}