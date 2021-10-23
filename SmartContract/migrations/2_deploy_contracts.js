var VaccinePassport = artifacts.require("./VaccinePassport.sol");

module.exports = function (deployer) {
  deployer.deploy(VaccinePassport);
};
