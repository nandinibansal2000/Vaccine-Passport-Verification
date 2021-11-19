import Web3 from 'web3';
import HealthCareSignUpBuild from "contracts/HealthCareSignUp.json";
let selectedAccount;
let HealthCareSignUpContract;
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
      isIntialized = true;
}


export const signupToken = async () => {
    if(!isIntialized){
        await init();
    }
    return HealthCareSignUpContract.methods.signup("24353446nk35", "XYZ hnkospital", "ab456nkc@xyz.com", "passnkword").send({from  : selectedAccount})
}