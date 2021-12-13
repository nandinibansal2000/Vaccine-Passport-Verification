var VaccinePassport = artifacts.require("./VaccinePassport.sol");
var Registration = artifacts.require("./HealthCareSignUp.sol");

module.exports = function(deployer) {
  deployer.deploy(Registration);
  deployer.deploy(VaccinePassport);
};

/*
module.exports = async(deployer) => {
  deployer.deploy(Registration);
  deployer.deploy(VaccinePassport);

  reg = await Registration.deployed()
  vaxx = await VaccinePassport.deployed()
  let setAddress = await vaxx.setAddressSignUp(
     reg.address
  );
};
*/
