//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./HealthCareSignUp.sol";

contract VaccinePassport {
    address public addressSignUp;

    struct VaccineDetails {
        string batchID;
        string vaccineName;
        string manufacturer;
        string placeOfVaccination;
        bool registered;
    }

    mapping(bytes32 => VaccineDetails) public vaccineDetails;

    // constructor(address _address) {
    //     setAddressSignUp(_address);
    // }

    function alreadyAdded(bytes32 cardHolderID) public view returns (bool) {
        return vaccineDetails[cardHolderID].registered;
    }

    function addVaccineDetail(
        string memory _name,
        string memory _gender,
        string memory _dob,
        string memory _aadharID,
        string memory _doseNo,
        string memory _batchID,
        string memory _vaccineName,
        string memory _manufacturer,
        string memory _placeOfVaccination,
        string memory _license,
        string memory _password
    ) public {
        require(
            isLoggedIn(_license, _password),
            "Login with valid license and password"
        );

        VaccineDetails memory vaccineDetail = VaccineDetails(
            _batchID,
            _vaccineName,
            _manufacturer,
            _placeOfVaccination,
            true
        );

        bytes32 cardHolderID = sha256(
            abi.encode(_name, _gender, _dob, _aadharID, _doseNo)
        );

        require(!alreadyAdded(cardHolderID), "details already uploaded");

        vaccineDetails[cardHolderID] = vaccineDetail;
    }

    function verifyVaccineDetails(
        string memory _name,
        string memory _gender,
        string memory _dob,
        string memory _aadharID,
        string memory _doseNo
    ) public view returns (bool) {
        bytes32 cardHolderID = sha256(
            abi.encode(_name, _gender, _dob, _aadharID, _doseNo)
        );
        require(vaccineDetails[cardHolderID].registered, "verified");
        return vaccineDetails[cardHolderID].registered;
    }

    function setAddressSignUp(address _address) public {
        addressSignUp = _address;
    }

    function isLoggedIn(string memory _license, string memory _password)
        public
        view
        returns (bool)
    {
        HealthCareSignUp signup = HealthCareSignUp(addressSignUp);
        return signup.loginFromContract(msg.sender, _license, _password);
    }
}
