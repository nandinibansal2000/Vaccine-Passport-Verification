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
      console.log(networkId);

      HealthCareSignUpContract = new web3.eth.Contract(HealthCareSignUpBuild.abi,HealthCareSignUpBuild.networks[networkId].address );
      VaccinePassportContract = new web3.eth.Contract(VaccinePassportBuild.abi,VaccinePassportBuild.networks[networkId].address );

      isIntialized = true;
}


export const signupToken = async (license, hospital, email, password) => {
    if(!isIntialized){
        await init();
    }
    // return HealthCareSignUpContract.methods.signup("243534345", "XYZ hospital", "abc@xyz.com", "password").send({from  : selectedAccount});
    return HealthCareSignUpContract.methods.signup(license, hospital, email, password).send({from  : selectedAccount});
}


export const loginToken = async (email , password) => {
    if(!isIntialized){
        await init();
    }
    // return HealthCareSignUpContract.methods.login("243534345", "password").send({from  : selectedAccount});
    return HealthCareSignUpContract.methods.login(email, password).send({from  : selectedAccount});
}

export const addVaccineDetailToken = async (name, gender, dob, aadharID, doseNo, batchID, vaccineName, manufacturer, placeOfVaccination,license, password) => {

    if(!isIntialized){
        await init();
    }
    await VaccinePassportContract.methods.setAddressSignUp(HealthCareSignUpContract._address).send({from  : selectedAccount});
    // await VaccinePassportContract.methods.addVaccineDetail("Dibya", "F", "12/12/2021", "243252", "2", "21432", "Covishield", "Serum", "XYZ hospital", "243534345", "password").send({from  : selectedAccount});
    return VaccinePassportContract.methods.addVaccineDetail(name, gender, dob, aadharID, doseNo, batchID, vaccineName, manufacturer, placeOfVaccination,license, password).send({from  : selectedAccount});
}

export const verifyVaccineDetailsToken = async (name, dob, aadharID, doseNo) => {
    if(!isIntialized){
        await init();
    }
    console.log(name);
    console.log(dob);
    console.log(aadharID);
    console.log(doseNo);
    await VaccinePassportContract.methods.setAddressSignUp(HealthCareSignUpContract._address).send({from  : selectedAccount});
    // var verified = await  VaccinePassportContract.methods.verifyVaccineDetails("Dibya", "F", "12/12/2021", "243252", "2").send({from  : selectedAccount});
    var verified  = await VaccinePassportContract.methods.verifyVaccineDetails(name, dob, aadharID, doseNo).send({from  : selectedAccount});
    console.log(verified);
  }