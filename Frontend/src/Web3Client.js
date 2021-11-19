import Web3 from 'web3';
import HealthCareSignUpBuild from "contracts/HealthCareSignUp.json";
import VaccinePassportBuild from "contracts/VaccinePassport.json";
let selectedAccount;
let HealthCareSignUpContract;
let VaccinePassportContract;
let isIntialized = false;
export const init = async () => {
      let provider = window.ethereum;
      if(typeof provider !== 'undefined'){
        // metamask is installed

        provider.request({method: 'eth_requestAccounts'}).then(accounts =>{
          selectedAccount = accounts[0];
          console.log(`Selected Account is ${selectedAccount}`);
        }).catch(err=>{
          console.log(err);
          return ;
        });
        
        window.ethereum.on("accountsChanged", function(accounts){
        //   console.log(accounts);
          selectedAccount = accounts[0];
          console.log(`Selected Account changed to ${selectedAccount}`);
        })
        


      }

      const web3 = new Web3(provider);
      const networkId = await web3.eth.net.getId();

      HealthCareSignUpContract = new web3.eth.Contract(HealthCareSignUpBuild.abi,HealthCareSignUpBuild.networks[networkId].address );
      VaccinePassportContract = new web3.eth.Contract(VaccinePassportBuild.abi,VaccinePassportBuild.networks[networkId].address );

      isIntialized = true;
}


export const signupToken = async () => {
    if(!isIntialized){
        await init();
    }
    return HealthCareSignUpContract.methods.signup("243534345", "XYZ hospital", "abc@xyz.com", "password").send({from  : selectedAccount});
}


export const loginToken = async () => {
    if(!isIntialized){
        await init();
    }
    return HealthCareSignUpContract.methods.login("243534345", "password").send({from  : selectedAccount});
}

export const addVaccineDetailToken = async () => {
    if(!isIntialized){
        await init();
    }
    // return VaccinePassportContract.methods.addVaccineDetail().send({from  : selectedAccount});
}

export const verifyVaccineDetailsToken = async () => {
    if(!isIntialized){
        await init();
    }
    // return VaccinePassportContract.methods.verifyVaccineDetails().send({from  : selectedAccount});
}