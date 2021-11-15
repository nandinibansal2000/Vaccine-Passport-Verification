var VaccinePassport = artifacts.require("./VaccinePassport.sol");
var Registration = artifacts.require("./HealthCareSignUp.sol");

module.exports = function (deployer) {
  deployer.deploy(VaccinePassport);
  deployer.deploy(Registration);
};
