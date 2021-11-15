var VaccinePassport = artifacts.require("./VaccinePassport.sol");
var Registration = artifacts.require("./HealthCareSignUp.sol");

module.exports = function(deployer) {
  deployer.deploy(Registration).then(function(Registration) {
      deployer.deploy(VaccinePassport, Registration.address);
  });
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
